import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { TripadvisorService } from '../services/tripadvisor.service';
import { map, Observable } from 'rxjs';
import { ILocation } from '../../shared/models/location.model';

export const locationResolver: ResolveFn<Observable<ILocation>> = (
  route,
  state
) => {
  return inject(TripadvisorService).getLocationDetails(
    route.paramMap.get('id')!
  );
};
