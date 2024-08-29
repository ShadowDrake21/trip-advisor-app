import { Component, inject, OnInit } from '@angular/core';
import { TripadvisorService } from '../../core/services/tripadvisor.service';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { ILocation } from '../../shared/models/location.model';
import { AsyncPipe, JsonPipe, KeyValuePipe, NgIf } from '@angular/common';
import { staticLocation } from '../../shared/static/location.static';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [JsonPipe, AsyncPipe, NgIf, KeyValuePipe],
  templateUrl: './location.component.html',
  styleUrl: './location.component.sass',
})
export class LocationComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private tripadvisorService = inject(TripadvisorService);

  locationDetails$!: Observable<Partial<ILocation>>;

  ngOnInit(): void {
    // this.locationDetails$ = this.route.data.pipe(
    //   map((data) => data['location'])
    // ) as Observable<ILocation>;

    this.locationDetails$ = of(staticLocation);
  }
}
