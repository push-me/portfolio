import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { RadioGroupService } from '../radio-group/radio-group.service';
import { ButtonCfg } from './button.component.config';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() config: ButtonCfg = {
    type: 'primary',
    hover: 'hover-dim',
    click: 'click-border'
  };

  @Input() type: string = 'primary';
  @Input() isToggle: boolean = false;
  @Input() radioValue: string = '';
  @Input() isGroupButton: boolean = false;
  isActive: boolean = false;
  isClicked: boolean = false;


  // Hover effect classes
  hoverEffects = [
    'hover-shadow',
    'hover-outline',
    'hover-dim'
  ];

  // Click effect classes
  clickEffects = [
    'click-press',
    'click-primary-glow',
    'click-border'
  ];

  hoverClass: string = '';
  clickClass: string = '';
  buttonType: string = 'primary';

  constructor(private radioGroupService: RadioGroupService) { }

  ngOnInit() {
    this.config.hover = 'hover-dim'

    if (this.config.active) {
      this.isActive = this.config.active
    }

    if(this.config.radioId) {
      this.radioGroupService.selectedButton$.subscribe(selectedValue => {
        this.isActive = (this.config.radioId === selectedValue)
      });
    }
    
  }


  // Attach click effect on mousedown
  @HostListener('mousedown')
  onMouseDown() {
    if (!this.config.disabled) {
      this.isClicked = true;
    }

  }

  // Remove click effect on mouseup
  @HostListener('mouseup')
  onMouseUp() {
    this.isClicked = false;
  }

  // Remove click effect if the user leaves the button area (e.g., drags mouse away)
  @HostListener('mouseleave')
  onMouseLeave() {
    this.isClicked = false;
  }

  getDynamicClasses(): { [key: string]: boolean } {
    const classes = {
      'btn': true,                 // Always include 'btn' class
      [this.config.type]: true,    // Add the button class (e.g., 'btn-primary')
      [this.config.click!]: this.isClicked,  // Add the click effect class conditionally
      'active': this.isActive || false,
      [this.config.groupPosition!]: !!this.config.groupPosition
    };
    return classes;
  }

  toggleActive() {
    if (this.config.isToggle) {
      this.isActive = !this.isActive; // Handle toggle mechanics
    } else if(this.config.radioId) {
      // Handle radio button selection
      this.radioGroupService.selectButton(this.config.radioId);
    }
  }
}
