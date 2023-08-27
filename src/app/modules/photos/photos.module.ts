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
import { PhotoComponent } from './pages/photo/photo.component';
import { AddressPipe } from 'src/app/shared/pipes/address.pipe';

@NgModule({
    declarations: [
      GalleryComponent,
      ListPhotosComponent,
      ItemPhotoComponent,
      FiltersComponent,
      PhotoComponent
    ],
    imports     : [
      RouterModule.forChild(photosRoutes),
      CoreModule,
      MaterialModule,
      SharedModule
    ],
    providers: [AddressPipe]
})
export class PhotosModule
{
}
