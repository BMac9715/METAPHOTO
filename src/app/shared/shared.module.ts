import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlSpn } from './config/paginator.config';

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      FormsModule,
      MaterialModule,
      ReactiveFormsModule
    ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: [
      { provide: MatPaginatorIntl, useClass: MatPaginatorIntlSpn }
    ]
})
export class SharedModule
{
}
