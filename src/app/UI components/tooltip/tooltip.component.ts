import { Component, ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { TooltipConfig } from './tooltip.component.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
 @Input() config!:TooltipConfig;

 @HostBinding('style.--arrow-color') arrowColor!: string;
 isVisible = false;

 constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.isVisible = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isVisible = false;
  }
  ngOnInit(): void {
    if(this.config.backgroundColor)
    this.arrowColor = this.config.backgroundColor
  }

  get tooltipStyles() {
    const positionStyles = this.getPositionStyles();
    return {
      color: this.config.color || '#ffffff',
      backgroundColor: this.config.backgroundColor || '#333',
      ...positionStyles
    };
  }

  private getPositionStyles() {
    switch (this.config.position) {
      case 'top':
        return { bottom: '100%', left: '50%', transform: 'translateX(-50%) translateY(-0.2em)' };
      case 'right':
        return { top: '50%', left: '100%', transform: 'translateY(-50%) translateX(0.2em)' };
      case 'bottom':
        return { top: '100%', left: '50%', transform: 'translateX(-50%) translateY(0.2em)' };
      case 'left':
        return { top: '50%', right: '100%', transform: 'translateY(-50%) translateX(-0.2em)' };
      default:
        return { top: '100%', left: '50%', transform: 'translateX(-50%) translateY(0.2em)' };
    }
  }
}
