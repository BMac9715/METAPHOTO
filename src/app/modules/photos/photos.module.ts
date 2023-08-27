import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { GalleryComponent } from './pages/gallery/gallery.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ListPhotosComponent } from './components/list-photos/list-photos.component';
import { ItemPhotoComponent } from './components/item-photo/item-photo.component';

import { photosRoutes } from './photos.routing';

@NgModule({
    declarations: [
      GalleryComponent,
      ListPhotosComponent,
      ItemPhotoComponent,
      FiltersComponent
    ],
    imports     : [
      RouterModule.forChild(photosRoutes),
      CoreModule,
      MaterialModule,
      SharedModule
    ]
})
export class PhotosModule
{
}
