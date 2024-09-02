import { Component, effect, input, output } from '@angular/core';
import { ILocationReviews } from '../../../../shared/models/location-review.model';
import { DatePipe, JsonPipe, NgIf } from '@angular/common';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzIconModule, provideNzIconsPatch } from 'ng-zorro-antd/icon';
import { NzAvatarComponent } from 'ng-zorro-antd/avatar';
import { LikeTwoTone, LikeOutline } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    JsonPipe,
    DatePipe,
    NgIf,
    NzCommentModule,
    NzIconModule,
    NzAvatarComponent,
    NzPaginationModule,
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.sass',
  providers: [provideNzIconsPatch([LikeTwoTone, LikeOutline])],
  host: { '[style.display]': `'block'`, '[style.padding-bottom]': `'25px'` },
})
export class ReviewsComponent {
  icons: IconDefinition[] = [LikeTwoTone, LikeOutline];

  reviews = input.required<Partial<ILocationReviews> | null>();

  constructor() {}
}
