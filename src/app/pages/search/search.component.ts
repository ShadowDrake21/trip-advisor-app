import { Component, inject, OnInit, signal } from '@angular/core';
import { TripadvisorService } from '../../core/services/tripadvisor.service';
import { Categories } from '../../shared/enums/categories.enum';
import { ILocatioSearch } from '../../shared/models/search.model';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    JsonPipe,
    RouterLink,
    SearchItemComponent,
    NzInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass',
})
export class SearchComponent implements OnInit {
  private tripadvisorService = inject(TripadvisorService);

  searchLocationsSig = signal<ILocatioSearch | undefined>(undefined);

  searchFormControl = new FormControl('');

  ngOnInit(): void {
    this.reactiveSearch();
  }

  reactiveSearch() {
    this.searchFormControl.valueChanges
      .pipe(
        debounceTime(600),
        distinctUntilChanged(),
        filter((searchTerm): searchTerm is string => !!searchTerm),
        switchMap((value) =>
          this.tripadvisorService.searchLocation(value, {
            category: Categories.Attractions,
            language: 'pl',
          })
        )
      )
      .subscribe({
        next: (searchResult) => {
          console.log('searchResult: ', searchResult);
          this.searchLocationsSig.set(searchResult);
        },
      });
  }
}
