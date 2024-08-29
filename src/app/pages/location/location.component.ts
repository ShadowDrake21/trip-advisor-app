import { Component, inject, OnInit } from '@angular/core';
import { TripadvisorService } from '../../core/services/tripadvisor.service';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { ILocation } from '../../shared/models/location.model';
import {
  AsyncPipe,
  DatePipe,
  JsonPipe,
  KeyValuePipe,
  NgIf,
} from '@angular/common';
import {
  locationPhotos,
  staticLocation,
} from '../../shared/static/location.static';
import { ILocationPhotos } from '../../shared/models/location-photos.model';
import { NzCardModule } from 'ng-zorro-antd/card';
import { PhotosListComponent } from './components/photos-list/photos-list.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [
    JsonPipe,
    AsyncPipe,
    NgIf,
    KeyValuePipe,
    NzCardModule,
    DatePipe,
    PhotosListComponent,
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.sass',
})
export class LocationComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private tripadvisorService = inject(TripadvisorService);

  locationDetails$!: Observable<Partial<ILocation>>;
  locationPhotos$!: Observable<Partial<ILocationPhotos>>;

  ngOnInit(): void {
    // this.locationDetails$ = this.route.data.pipe(
    //   map((data) => data['location'])
    // ) as Observable<ILocation>;

    this.locationDetails$ = of(staticLocation);

    // this.locationPhotos$ = this.tripadvisorService.getLocationPhotos(
    //   this.route.snapshot.params['id']
    // );

    this.locationPhotos$ = of(locationPhotos);
  }
}
