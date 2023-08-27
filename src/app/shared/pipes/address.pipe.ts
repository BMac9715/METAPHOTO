import { Pipe, PipeTransform } from '@angular/core';
import { Address } from 'src/app/modules/photos/models/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {
  transform(value: Address | undefined): string {
    if(value) {
      return `${value.street}, ${value.suite}. ${value.city}. ${value.zipcode}`;
    }

    return '';
  }
}
