import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PhotosService } from 'src/app/core/services/photos.service';
import { FiltersPhoto } from '../../models/filters.interface';
import { SharedDataService } from 'src/app/core/services/shared-data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {

  title: FormControl = new FormControl('', [Validators.minLength(3)]);
  album: FormControl = new FormControl('', [Validators.minLength(3)]);
  email: FormControl = new FormControl('', [Validators.email]);

  subscriptions: Subscription[] = [];

  constructor(private photosService: PhotosService,
              private sharedDataService: SharedDataService)
  {}

  ngOnInit(): void {
  }

  onFilter(): void {
    if(!this.title.valid || !this.album.valid || !this.email.valid){
      return;
    }

    let filters: FiltersPhoto = {};

    if(this.title.value != '') { filters.title = this.title.value; }

    if(this.album.value != '') { filters.album = this.album.value; }

    if(this.email.value != '') { filters.email = this.email.value; }

    this.sharedDataService.setIsLoading(true);

    this.sharedDataService.setRestartPag(true);

    this.subscriptions.push(
      this.photosService.getPhotos({limit: this.sharedDataService.getLimitValue(), offset: 0}, filters)
      .subscribe({
        next: (data) => {
          this.sharedDataService.setFilters(filters);
          this.sharedDataService.setGallery(data);

          this.sharedDataService.setRestartPag(false);
        },
        error: (err) => {
          console.error(err);
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

}
