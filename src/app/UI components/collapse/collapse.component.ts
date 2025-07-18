import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { collapseConfig } from './collapse.component.config';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-collapse',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './collapse.component.html',
  styleUrl: './collapse.component.scss',
  animations: [
    trigger('collapseAnimation', [
      state('collapsed', style({
        height: '0',
        width: '0',
        opacity: 0
      })),
      state('expanded', style({
        height: '*',
        width: '*',
        opacity: 1
      })),
      
      transition('collapsed <=> expanded', [
        animate('{{duration}}ms')
      ], { params: { duration: 300 } })
    ]),

    trigger('dynamicCollapseAnimation', [
      state('collapsed', style({
        width: '0',
        height: '0',
        overflow: 'hidden', // Prevent content overflow
        opacity: 0
      })),
      state('expanded', style({
        width: '300px',  // Use parameter for width
        height: '300px', // Use parameter for height
        overflow: 'hidden', // Prevent content overflow
        opacity: 1,
      }), { params: { direction:'horizontal',width: '300px', height: '300px', duration: 300 } }),
      
      transition('collapsed <=> expanded', [
        animate('{{duration}}ms ease')
      ])
    ])
  ]
})

export class CollapseComponent {
  @Input() config:collapseConfig = {
    direction: 'vertical', // 'vertical' or 'horizontal'
    duration: 300, // Animation duration
    customClass: '', // Optional custom CSS class
    width:'300px',
    height:'300px',
    btnText:'',
    isCollapsed: true
  };

  width = 'auto';
  height = 'auto';

  toggleCollapse() {
    this.config.isCollapsed = !this.config.isCollapsed;
    if (this.config.direction === 'horizontal') {
      this.width = this.config.isCollapsed ? '0' : '*'; // Adjust width for horizontal
    } else {
      this.height = this.config.isCollapsed ? '0' : '*';
    }
  }
}
