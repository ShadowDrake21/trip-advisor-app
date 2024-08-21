import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../constants/tripadvisor.constants';
import {
  ILocatioSearch,
  ISearchLocationOptions,
} from '../../shared/models/search.model';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TripadvisorService {
  private http = inject(HttpClient);

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

    return this.http.get<ILocatioSearch>(
      `http://localhost:3000/proxy/search/`,
      {
        params,
      }
    );
  }
}
