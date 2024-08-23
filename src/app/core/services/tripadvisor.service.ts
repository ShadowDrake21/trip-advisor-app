import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../constants/tripadvisor.constants';
import {
  ILocatioSearch,
  ISearchLocationOptions,
} from '../../shared/models/search.model';
import { environment } from '../../../environments/environment.development';
import { PROXY_CONFIG_TOKEN } from '../../shared/configs/tokens.configs';

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
    if (addOptions) {
      (Object.keys(addOptions) as (keyof ISearchLocationOptions)[]).forEach(
        (key) => {
          const value = addOptions[key];
          if (value !== undefined) {
            params = params.set(key, value);
          }
        }
      );
    }

    return this.http.get<ILocatioSearch>(`${this.proxyToken}proxy/search/`, {
      params,
    });
  }
}
