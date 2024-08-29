import { Component, input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import {
  ILocationPhotos,
  ILocationPhotosData,
} from '../../../../shared/models/location-photos.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-photos-list',
  standalone: true,
  imports: [NzCardModule, DatePipe],
  templateUrl: './photos-list.component.html',
  styleUrl: './photos-list.component.sass',
})
export class PhotosListComponent {
  photos = input.required<ILocationPhotosData[]>();
}
