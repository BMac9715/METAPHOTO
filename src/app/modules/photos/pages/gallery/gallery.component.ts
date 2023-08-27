import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  isDrawerOpen: boolean = false;

  constructor(public device: DeviceDetectorService) {
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

}
