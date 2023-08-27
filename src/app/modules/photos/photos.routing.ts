import { Route } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';

export const photosRoutes: Route[] = [
    {
        path     : '',
        component: GalleryComponent
    }
];
