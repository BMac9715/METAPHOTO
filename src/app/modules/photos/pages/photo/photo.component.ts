import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../models/photo.interface';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() photo: Photo | undefined | null = undefined;
  
  isShowIds: boolean = false;

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
  }

  onBack(): void {
    this.photoService.setPhoto(null);
  }

  onHandleError(event: Event): void {
    (event.target as HTMLImageElement).src = 'assets/not-image.jpg';
  }
}
