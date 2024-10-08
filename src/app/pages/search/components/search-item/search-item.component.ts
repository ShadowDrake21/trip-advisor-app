import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzCardComponent, NzCardMetaComponent } from 'ng-zorro-antd/card';
import { ILocatioSearchItem } from '../../../../shared/models/search.model';
import { SearchAnimationDirective } from '../../../../shared/directives/search-animation.directive';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [
    NzCardComponent,
    NzCardMetaComponent,
    RouterLink,
    SearchAnimationDirective,
  ],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.sass',
})
export class SearchItemComponent {
  locationSig = input.required<ILocatioSearchItem>({ alias: 'location' });
}
