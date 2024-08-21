import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { TripadvisorService } from '../../core/services/tripadvisor.service';
import { Categories } from '../../shared/enums/categories.enum';
import {
  ILocatioSearch,
  ISearchLocationOptions,
} from '../../shared/models/search.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { NzCardComponent, NzCardMetaComponent } from 'ng-zorro-antd/card';
import { RouterLink } from '@angular/router';
import { NzDescriptionsComponent } from 'ng-zorro-antd/descriptions';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [JsonPipe, NzCardComponent, NzCardMetaComponent, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass',
})
export class SearchComponent implements OnInit {
  private tripadvisorService = inject(TripadvisorService);

  searchLocationsSig = signal<ILocatioSearch | undefined>(undefined);

  ngOnInit(): void {
    this.tripadvisorService
      .searchLocation('warsaw', {
        category: Categories.Attractions,
        language: 'pl',
      })
      .subscribe({
        next: (searchResult) => {
          console.log('searchResult: ', searchResult);
          this.searchLocationsSig.set(searchResult);
        },
      });
  }
}
