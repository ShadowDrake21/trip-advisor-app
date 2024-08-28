import { Component, inject, OnInit } from '@angular/core';
import { TripadvisorService } from '../../core/services/tripadvisor.service';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { ILocation } from '../../shared/models/location.model';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [JsonPipe, AsyncPipe, NgIf],
  templateUrl: './location.component.html',
  styleUrl: './location.component.sass',
})
export class LocationComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private tripadvisorService = inject(TripadvisorService);

  locationDetails$!: Observable<ILocation>;

  ngOnInit(): void {
    this.locationDetails$ = this.route.data.pipe(
      map((data) => data['location'])
    ) as Observable<ILocation>;
  }
}
