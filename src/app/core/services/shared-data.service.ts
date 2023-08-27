import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay } from 'rxjs';
import { FiltersPhoto } from 'src/app/modules/photos/models/filters.interface';
import { GalleryPhotos } from 'src/app/modules/photos/models/gallery.interface';
import { RequestPagination } from 'src/app/modules/photos/models/pagination.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private gallery$: BehaviorSubject<GalleryPhotos | null> = new BehaviorSubject<GalleryPhotos | null>(null);
  private isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private restartPag$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private limit$: BehaviorSubject<number> = new BehaviorSubject<number>(25);
  private filters$: BehaviorSubject<FiltersPhoto> = new BehaviorSubject<FiltersPhoto>({});

  constructor() {
  }

  setGallery(data: GalleryPhotos): void {
    this.gallery$.next(data);
  }

  getGallery(): Observable<GalleryPhotos | null> {
    return this.gallery$.asObservable();
  }

  setIsLoading(isLoading: boolean): void {
    this.isLoading$.next(isLoading);
  }

  getIsLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  setLimit(limit: number): void {
    this.limit$.next(limit);
  }

  getLimit(): Observable<number> {
    return this.limit$.asObservable();
  }

  getLimitValue(): number {
    return this.limit$.value;
  }

  setFilters(filters: FiltersPhoto): void {
    this.filters$.next(filters);
  }

  getFilters(): Observable<FiltersPhoto> {
    return this.filters$.asObservable();
  }

  getFiltersValue(): FiltersPhoto {
    return this.filters$.value;
  }

  setRestartPag(value: boolean) : void {
    this.restartPag$.next(value);
  }

  getRestartPag(): Observable<boolean> {
    return this.restartPag$.asObservable();
  }
}
