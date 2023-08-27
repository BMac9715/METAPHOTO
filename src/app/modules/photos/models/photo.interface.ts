import { Album } from "./album.interface";

export interface Photo {
  id:           number;
  title:        string;
  url:          string;
  thumbnailUrl: string;
  album:        Album;
}
