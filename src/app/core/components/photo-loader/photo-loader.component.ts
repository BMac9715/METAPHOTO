import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-loader',
  templateUrl: './photo-loader.component.html',
  styleUrls: ['./photo-loader.component.scss']
})
export class PhotoLoaderComponent {

  @Input() message:string = 'Cargando ...';

}
