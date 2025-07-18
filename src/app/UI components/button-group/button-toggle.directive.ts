import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonToggle]',
  standalone: true
})
export class ButtonToggleDirective {
  @Input() isActive: boolean = false;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.updateState();
  }

  @HostListener('click') toggleState() {
    this.isActive = !this.isActive;
    this.updateState();
  }

  private updateState() {
    if (this.isActive) {
      this.renderer.addClass(this.el.nativeElement, 'active');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'active');
    }
  }
}
