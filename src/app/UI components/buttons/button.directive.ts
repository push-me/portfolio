import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true
})
export class ButtonDirective {
  @Input() buttonType: string = 'primary'; // default type
  @Input() hoverEffect: string = 'hover';        // Custom hover effect class
  @Input() clickEffect: string = 'clicked';        // Custom click effect class

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.updateButtonClass();
  }

  updateButtonClass() {
    this.renderer.addClass(this.el.nativeElement, 'btn');
    this.renderer.addClass(this.el.nativeElement, `btn-${this.buttonType}`);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, this.hoverEffect);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, this.hoverEffect);
  }

  @HostListener('mousedown') onMouseDown() {
    this.renderer.addClass(this.el.nativeElement, this.clickEffect);
  }

  @HostListener('mouseup') onMouseUp() {
    this.renderer.removeClass(this.el.nativeElement, this.clickEffect);
  }

}
