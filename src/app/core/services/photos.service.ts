import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { FiltersPhoto } from 'src/app/modules/photos/models/filters.interface';
import { GalleryPhotos } from 'src/app/modules/photos/models/gallery.interface';
import { RequestPagination } from 'src/app/modules/photos/models/pagination.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private BASE_URL = environment.apiURL;

  constructor(private http: HttpClient) {
  }

  getPhotos(pag: RequestPagination, filters?: FiltersPhoto): Observable<GalleryPhotos> {
    let params: string = '?';

    if(filters?.title) {
      params += `title=${filters.title}&`;
    }

    if(filters?.album) {
      params += `album.title=${filters.album}&`;
    }

    if(filters?.email) {
      params += `album.user.email=${filters.email}&`;
    }

    params += `limit=${pag.limit}&`;
    params += `offset=${pag.offset}`;

    return this.http.get<GalleryPhotos>(`${this.BASE_URL}/photos${params}`).pipe(delay(1000));
  }
}
