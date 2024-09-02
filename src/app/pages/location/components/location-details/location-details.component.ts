import { Component, input } from '@angular/core';
import { ILocation } from '../../../../shared/models/location.model';
import { KeyValuePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-location-details',
  standalone: true,
  imports: [NgIf, KeyValuePipe],
  templateUrl: './location-details.component.html',
  styleUrl: './location-details.component.sass',
})
export class LocationDetailsComponent {
  detailsSig = input.required<Partial<ILocation>>({ alias: 'details' });
}
