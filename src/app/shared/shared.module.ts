import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlSpn } from './config/paginator.config';
import { AddressPipe } from './pipes/address.pipe';

@NgModule({
    declarations: [
      AddressPipe
    ],
    imports: [
      CommonModule,
      FormsModule,
      MaterialModule,
      ReactiveFormsModule
    ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      AddressPipe
    ],
    providers: [AddressPipe, { provide: MatPaginatorIntl, useClass: MatPaginatorIntlSpn }]
})
export class SharedModule
{
}
