import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PhotoLoaderComponent } from './components/photo-loader/photo-loader.component';

@NgModule({
    declarations: [
      PhotoLoaderComponent
    ],
    imports: [
      CommonModule,
      SharedModule
    ],
    exports: [
      PhotoLoaderComponent
    ]
})
export class CoreModule
{
}
