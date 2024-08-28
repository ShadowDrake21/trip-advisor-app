import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../constants/tripadvisor.constants';
import {
  ILocationSearch,
  ISearchLocationOptions,
} from '../../shared/models/search.model';
import { environment } from '../../../environments/environment.development';
import { PROXY_CONFIG_TOKEN } from '../../shared/configs/tokens.configs';
import { ILocation } from '../../shared/models/location.model';

@Injectable({
  providedIn: 'root',
})
export class TripadvisorService {
  private http = inject(HttpClient);

  constructor(@Inject(PROXY_CONFIG_TOKEN) private proxyToken: string) {}

  searchLocation(
    searchQuery: string,
    addOptions?: Partial<ISearchLocationOptions>
  ) {
    let params = new HttpParams()
      .set('searchQuery', searchQuery)
      .set('key', environment.TRIPADVISOR_KEY);
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

    return this.http.get<ILocationSearch>(`${this.proxyToken}proxy/search/`, {
      params,
    });
  }

  getLocationDetails(locationId: string, language: string = 'en') {
    return this.http.get<ILocation>(`${this.proxyToken}proxy/details/`, {
      params: { id: locationId, language },
    });
  }
}
