import { Component, Input } from '@angular/core';
import { Photo } from '../../models/photo.interface';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-item-photo',
  templateUrl: './item-photo.component.html',
  styleUrls: ['./item-photo.component.scss']
})
export class ItemPhotoComponent {

  @Input() photo: Photo | undefined = undefined;

  constructor(private photoService: PhotoService) {}

  onSelectPhoto(): void {
    this.photoService.setPhoto(this.photo ? this.photo : null);
  }

  onHandleError(event: Event): void {
    (event.target as HTMLImageElement).src = 'assets/not-image.jpg';
  }
}
