import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../constants/tripadvisor.constants';
import { ISearchLocationOptions } from '../../shared/models/search.model';
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
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Referer: 'https://1005-46-149-91-123.ngrok-free.app', // Your ngrok URL
    });

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

    return this.http.get(`${BASE_API_URL}location/search?key=`, {
      params,
    });
  }
}
