import { Component, inject, OnInit } from '@angular/core';
import { TripadvisorService } from '../../core/services/tripadvisor.service';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { ILocation } from '../../shared/models/location.model';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './location.component.html',
  styleUrl: './location.component.sass',
})
export class LocationComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private tripadvisorService = inject(TripadvisorService);

  locationDetails$!: Observable<ILocation>;

  ngOnInit(): void {
    // this.locationDetails$ = this.route.url.pipe(
    //   map((segments) => segments[1].path),
    //   tap((value) => console.log('location', value)),
    //   switchMap((locationId) =>
    //     this.tripadvisorService.getLocationDetails(locationId)
    //   ),
    //   tap((value) => console.log('location', value))
    // );

    this.locationDetails$ = this.route.data.pipe(
      map((data) => data['location'])
    ) as Observable<ILocation>;

    // this.tripadvisorService.getLocationDetails()
  }
}
