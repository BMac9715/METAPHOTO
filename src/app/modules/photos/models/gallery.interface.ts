import { ResponsePagination } from "./pagination.interface";
import { Photo } from "./photo.interface";

export interface GalleryPhotos {
  items: Photo[],
  pagination: ResponsePagination
}
