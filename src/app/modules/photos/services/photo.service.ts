import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Photo } from '../models/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photo$: BehaviorSubject<Photo | null> = new BehaviorSubject<Photo | null>(null);

  constructor() {
  }

  setPhoto(photo: Photo | null): void {
    this.photo$.next(photo);
  }

  getPhoto(): Observable<Photo | null> {
    return this.photo$.asObservable();
  }
}
