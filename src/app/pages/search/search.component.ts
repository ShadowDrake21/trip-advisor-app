import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
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
  Validators,
} from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
  tap,
} from 'rxjs';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { searchLanguages } from '../../shared/static/search-languages.static';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzFormModule } from 'ng-zorro-antd/form';
import { InputDisabledDirective } from '../../shared/directives/input-disabled.directive';

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
    InputDisabledDirective,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass',
})
export class SearchComponent implements OnInit, OnDestroy {
  categories = Categories;
  searchLanguages = searchLanguages;
  private tripadvisorService = inject(TripadvisorService);

  searchLocationsSig = signal<ILocatioSearch | undefined>(undefined);

  searchFormControl = new FormControl('');

  searchForm = new FormGroup({
    query: new FormControl('', Validators.required),
    category: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    coordinates: new FormGroup({
      latitude: new FormControl(''),
      longitude: new FormControl(''),
    }),
    language: new FormControl(''),
  });

  ngOnInit(): void {
    this.checkParameters();
    this.reactiveSearch();
  }

  reactiveSearch() {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(600),
        distinctUntilChanged(),
        tap(() => this.checkParameters())
        // switchMap((value) =>
        //   this.tripadvisorService.searchLocation(value, {
        //     category: Categories.Attractions,
        //     language: 'pl',
        //   })
        // )
      )
      .subscribe({
        next: (searchResult) => {
          console.log('searchResult: ', searchResult);
          // this.searchLocationsSig.set(searchResult);
        },
      });
  }

  checkParameters() {
    const controls = this.searchForm.controls;
    const query = this.searchForm.value.query;

    const toggleControls = (enable: boolean) => {
      if (enable) {
        controls.category.enable();
        controls.address.enable();
        controls.phone.enable();
        controls.coordinates.enable();
        controls.language.enable();
      } else {
        controls.category.disable();
        controls.address.disable();
        controls.phone.disable();
        controls.coordinates.disable();
        controls.language.disable();
      }
    };

    toggleControls(!!(query && query.length > 0));
  }

  onSubmit() {
    console.log('onSubmit(): ', this.searchForm.value);
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
