import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PhotosService } from 'src/app/core/services/photos.service';
import { Photo } from '../../models/photo.interface';
import { ResponsePagination } from '../../models/pagination.interface';
import { SharedDataService } from 'src/app/core/services/shared-data.service';
import { PageEvent } from '@angular/material/paginator';
import { FiltersPhoto } from '../../models/filters.interface';

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.scss']
})
export class ListPhotosComponent implements OnInit, OnDestroy {

  isLoading: boolean = true;
  isRestarPag: boolean = false;
  subscriptions: Subscription[] = [];

  limit: number = 25;

  photos: Photo[] = [];
  totalItems: number = 0;
  currentPag: ResponsePagination = { totalItems: 0, page: 1, nextPage: 2, prevPage: 0, perPage: this.limit, totalPages: 1 };

  constructor(private photosService: PhotosService,
              private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.sharedDataService.getIsLoading()
      .subscribe({
        next: (val) => { this.isLoading = val; }
      })
    );

    this.subscriptions.push(
      this.sharedDataService.getRestartPag()
      .subscribe({
        next: (val) => { this.isRestarPag = val; }
      })
    )

    this.subscriptions.push(
      this.sharedDataService.getLimit()
      .subscribe({
        next: (val) => { this.limit = val;  this.isRestarPag = false; }
      })
    );

    this.subscriptions.push(
      this.sharedDataService.getGallery()
      .subscribe({
        next: (data) => {
          this.photos = data?.items || [];
          this.totalItems = data?.pagination.totalItems || 0;
          this.currentPag = data?.pagination  || this.currentPag;

          this.sharedDataService.setIsLoading(false);
        }
      })
    );

    this.sharedDataService.setIsLoading(true);

    this.subscriptions.push(
      this.photosService.getPhotos({ limit: 25, offset: 0})
      .subscribe({
        next: (data) => {
          this.sharedDataService.setGallery(data);
        },
        error: (err) => {
          console.error(err);

        }
      })
    );
  }

  onPaginatorEvent(event: PageEvent): void {
    this.sharedDataService.setIsLoading(true);

    let offset = 0;

    if(event.pageSize != this.limit) {
      this.isRestarPag = true;
    }
    else {
      offset = this._getOffset(event)
    }

    this.subscriptions.push(
      this.photosService.getPhotos({limit: event.pageSize, offset: offset}, this.sharedDataService.getFiltersValue())
      .subscribe({
        next: (data) => {
          this.sharedDataService.setGallery(data);

          if(event.pageSize != this.limit){ this.sharedDataService.setLimit(event.pageSize); }
        }
      })
    )

  }

  private _getOffset(page: PageEvent): number {
    const offsetChange = page.pageIndex - (page.previousPageIndex || 0);
    return (offsetChange > 0) ? (page.pageIndex * page.pageSize) : (page.pageIndex * page.pageSize + (offsetChange+1) * page.pageSize);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe()
    });
  }

}
