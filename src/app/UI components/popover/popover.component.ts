import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { PopoverConfig } from './popover.component.config';
import { ButtonComponent } from '../button/button.component';


@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss'
})
export class PopoverComponent implements OnInit {
  @HostBinding('style.--arrow-color') popoverBgColor!: string;

  @HostBinding('style.--arrow-border-color') popoverBorderColor!:string;

  ngOnInit(): void {
    this.popoverBgColor = this.computePopoverBgColor();
    this.popoverBorderColor = this.computePopoverBorderColor();
    if(this.config.placement === 'left') {
      this.arrowClass = 'arrow-right'
    } else if(this.config.placement === 'right') {
      this.arrowClass = 'arrow-left'
    } else if(this.config.placement === 'bottom') {
      this.arrowClass = 'arrow-top'
    } else if(this.config.placement === 'top') {
      this.arrowClass = 'arrow-bottom'
    }
    
    
  }

  private computePopoverBgColor(): string {
    if (this.config.arrow) {
      if (this.config.title && this.config.placement === 'bottom') {
        return this.config.titleStyle?.['background-color'] || '#e9ecef';
      }
      return this.config.arrow.color;
    }
  
    if (this.config.title && this.config.placement === 'bottom') {
      return '#e9ecef';
    }
  
    return '';
  }

  private computePopoverBorderColor():string {
    if(this.config.arrow) {
      return this.config.arrow.border
    } else return ''
  }

  @Input() config!: PopoverConfig;
  arrowClass = ''
  isVisible = false;

  togglePopover() {
    this.isVisible = !this.isVisible;
  }
}
