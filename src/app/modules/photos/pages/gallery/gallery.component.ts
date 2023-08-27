import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Photo } from '../../models/photo.interface';
import { Subscription } from 'rxjs';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  isDrawerOpen: boolean = false;
  isPhotoSelect: boolean = false;

  currentPhoto: Photo | null = null;

  subscriptions: Subscription[] = [];

  constructor(public device: DeviceDetectorService,
              private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.photoService.getPhoto()
      .subscribe({
        next: (val) => {
          if(val && val != null) {
            this.currentPhoto = val;
            this.isPhotoSelect = true;
            return;
          }

          this.currentPhoto = null;
          this.isPhotoSelect = false;
        }
      })
    );
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

}
