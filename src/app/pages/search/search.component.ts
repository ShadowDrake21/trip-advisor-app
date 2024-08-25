import {
  Component,
  computed,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { TripadvisorService } from '../../core/services/tripadvisor.service';
import { Categories } from '../../shared/enums/categories.enum';
import {
  ILocatioSearch,
  ISearchLocationOptions,
} from '../../shared/models/search.model';
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
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { searchLanguages } from '../../shared/static/search-languages.static';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzFormModule } from 'ng-zorro-antd/form';
import { InputDisabledDirective } from '../../shared/directives/input-disabled.directive';
import { NzButtonModule } from 'ng-zorro-antd/button';

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
    NzButtonModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass',
})
export class SearchComponent implements OnInit, OnDestroy {
  categories = Categories;
  searchLanguages = searchLanguages;

  private tripadvisorService = inject(TripadvisorService);

  searchLocationsSig = signal<ILocatioSearch | undefined>(undefined);
  totalLocationCount: Signal<number> = computed(
    () => this.searchLocationsSig()?.data.length ?? 0
  );

  searchFormControl = new FormControl('');

  searchForm = new FormGroup({
    query: new FormControl('', Validators.required),
    category: new FormControl<string | undefined>(undefined),
    address: new FormControl<string | undefined>(undefined),
    phone: new FormControl<string | undefined>(undefined),
    coordinates: new FormGroup({
      latitude: new FormControl<number | undefined>(undefined),
      longitude: new FormControl<number | undefined>(undefined),
    }),
    language: new FormControl<string | undefined>('en'),
  });

  private searchSubscription!: Subscription;

  ngOnInit(): void {}

  onSubmit() {
    if (!this.searchForm.value.query) {
      return;
    }

    this.searchSubscription = this.tripadvisorService
      .searchLocation(this.searchForm.value.query, this.formLocationObject())
      .subscribe((result) => {
        this.searchLocationsSig.set(result);
      });
  }

  formLocationObject(): Partial<ISearchLocationOptions> {
    return {
      category: this.searchForm.value.category ?? undefined,
      phone: this.searchForm.value.phone ?? undefined,
      address: this.searchForm.value.address ?? undefined,
      latLong:
        this.searchForm.value.coordinates?.latitude &&
        this.searchForm.value.coordinates?.longitude
          ? `${this.searchForm.value.coordinates?.latitude},${this.searchForm.value.coordinates?.longitude}`
          : undefined,
      language: this.searchForm.value.language ?? undefined,
    };
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
