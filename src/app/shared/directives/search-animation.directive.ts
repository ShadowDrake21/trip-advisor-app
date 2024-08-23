import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[searchAnimation]',
  standalone: true,
})
export class SearchAnimationDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeGradientPosition('100% 50%');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeGradientPosition('0% 50%');
  }

  private changeGradientPosition(values: string) {
    this.el.nativeElement.style.backgroundPosition = values;
  }
}
