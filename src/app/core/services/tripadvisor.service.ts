import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import {
  ILocationSearch,
  ISearchLocationOptions,
} from '../../shared/models/search.model';
import { environment } from '../../../environments/environment.development';
import { PROXY_CONFIG_TOKEN } from '../../shared/configs/tokens.configs';
import { ILocation } from '../../shared/models/location.model';
import { Observable } from 'rxjs';
import {
  ILocationPhotos,
  ILocationPhotosOptions,
} from '../../shared/models/location-photos.model';

@Injectable({
  providedIn: 'root',
})
export class TripadvisorService {
  private http = inject(HttpClient);

  constructor(@Inject(PROXY_CONFIG_TOKEN) private proxyToken: string) {}

  searchLocation(
    searchQuery: string,
    addOptions?: Partial<ISearchLocationOptions>
  ): Observable<ILocationSearch> {
    let params = new HttpParams().set('searchQuery', searchQuery);

    console.log('addOption', addOptions);
    if (addOptions) {
      (Object.keys(addOptions) as (keyof ISearchLocationOptions)[]).forEach(
        (key) => {
          const value = addOptions[key];
          console.log('value', value);
          if (value !== undefined) {
            params = params.set(key, value);
          }
        }
      );
    }

    return this.http.get<ILocationSearch>(`${this.proxyToken}proxy/search`, {
      params,
    });
  }

  getLocationDetails(
    locationId: string,
    language: string = 'en'
  ): Observable<ILocation> {
    return this.http.get<ILocation>(`${this.proxyToken}proxy/details`, {
      params: { id: locationId, language },
    });
  }

  getLocationPhotos(
    locationId: string,
    additionalOptions: Partial<ILocationPhotosOptions> = {
      limit: 5,
      offset: 0,
      language: 'en',
    }
  ) {
    let params = new HttpParams().set('id', locationId);

    (
      Object.keys(additionalOptions) as (keyof ILocationPhotosOptions)[]
    ).forEach((key) => {
      const value = additionalOptions[key];
      console.log('value', value);
      if (value !== undefined) {
        params = params.set(key, value);
      }
    });
    this.http.get<ILocationPhotos>(`${this.proxyToken}proxy/photos`, {
      params,
    });
  }
}
