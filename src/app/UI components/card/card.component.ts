import { Component, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { CardConfig } from './card.component.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() config: CardConfig = { styles: {} };
  animation: { [key: string]: string } = {}

  constructor() {
    // Update the ngClassObject based on conditions
    this.setAnimation();
  }
  setAnimation() {
    if(this.config.animation) {
      this.animation = {
        [this.config.animation]: this.config.animation
      }

      
    }
    
        
   

  }
}
