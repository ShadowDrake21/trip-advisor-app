import { Component, inject, OnInit, signal } from '@angular/core';
import { TripadvisorService } from '../../core/services/tripadvisor.service';
import { Categories } from '../../shared/enums/categories.enum';
import { ILocatioSearch } from '../../shared/models/search.model';
import { JsonPipe, KeyValuePipe, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { searchLanguages } from '../../shared/static/search-languages.static';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    JsonPipe,
    RouterLink,
    SearchItemComponent,
    NzInputModule,
    ReactiveFormsModule,
    NzSelectModule,
    FormsModule,
    KeyValuePipe,
    NzInputNumberModule,
    NzFormModule,
    TitleCasePipe,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass',
})
export class SearchComponent implements OnInit {
  categories = Categories;
  searchLanguages = searchLanguages;
  private tripadvisorService = inject(TripadvisorService);

  searchLocationsSig = signal<ILocatioSearch | undefined>(undefined);

  searchFormControl = new FormControl('');

  searchForm = new FormGroup({
    query: new FormControl(''),
    category: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    latLong: new FormControl(''),
    language: new FormControl(''),
  });

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

  onSubmit() {
    console.log('onSubmit(): ', this.searchForm.value);
  }
}
