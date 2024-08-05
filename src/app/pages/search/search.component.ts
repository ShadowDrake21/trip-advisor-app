import { Component, inject, OnInit } from '@angular/core';
import { TripadvisorService } from '../../core/services/tripadvisor.service';
import { Categories } from '../../shared/enums/categories.enum';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass',
})
export class SearchComponent implements OnInit {
  private tripadvisorService = inject(TripadvisorService);

  ngOnInit(): void {
    this.tripadvisorService
      .searchLocation('warsaw', {
        category: Categories.Attractions,
        language: 'pl',
      })
      .subscribe(console.log);
  }
}
