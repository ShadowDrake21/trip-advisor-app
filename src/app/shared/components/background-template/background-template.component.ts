import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'background-template',
  standalone: true,
  imports: [],
  templateUrl: './background-template.component.html',
  styleUrl: './background-template.component.sass',
  host: {
    '[class]': 'classes',
  },
})
export class BackgroundTemplateComponent {
  @Input({ required: true }) classes!: string;
  @Input({ required: true }) title!: string;
}
