import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[inputDisabled]',
  standalone: true,
})
export class InputDisabledDirective {
  @Input() inputDisabled: boolean = true;

  constructor(private el: ElementRef) {
    this.el.nativeElement.disabled = this.inputDisabled;
    console.log('this.el.nativeElement.disabled', this.el.nativeElement);
  }
}
