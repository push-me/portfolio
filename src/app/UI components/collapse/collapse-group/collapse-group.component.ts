import { Component } from '@angular/core';
import { CollapseComponent } from '../collapse.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collapse-group',
  standalone: true,
  imports: [CommonModule, CollapseComponent],
  templateUrl: './collapse-group.component.html',
  styleUrl: './collapse-group.component.scss'
})
export class CollapseGroupComponent {
  items: Array<any> = [];

  constructor() {
    // Example: Prepopulate some items
    this.items = [
      {
        buttonText: 'Toggle Section 1',
        isCollapsed: true,
        content: 'Content for section 1',
        config: {
          direction: 'vertical',
          duration: 400,
          customClass: 'custom-collapse',
          isCollapsed:true,
          customStyles: {
            'padding': '10px',
            'background-color': '#f0f0f0',
            'border': '1px solid #ddd'
          }
        },
        customStyles: {
          'padding': '10px',
          'background-color': '#f0f0f0',
          'border': '1px solid #ddd'
        }
      },

      {
        buttonText: 'Toggle Section 2',
        isCollapsed: true,
        content: 'Content for section 2',
        config: {
          direction: 'horizontal',
          duration: 300,
          customClass: '',
          isCollapsed: true,
        },
        customStyles: {
          'padding': '15px',
          'background-color': '#f9f9f9'
        }
      }
    ];
  }

  // Dynamically toggle collapse/expand state
  toggleItem(index: number) {
    this.items[index].config.isCollapsed = !this.items[index].config.isCollapsed;
  }

  // Dynamically add a new button and collapsible content
  addItem() {
    this.items.push({
      buttonText: 'New Section ' + (this.items.length + 1),
      isCollapsed: true,
      content: 'This is dynamically added content for section ' + (this.items.length + 1),
      config: {
        direction: 'vertical',
        duration: 300,
        customClass: '',
        isCollapsed: true,
      },
      customStyles: {
        'padding': '10px',
        'background-color': '#e0e0e0'
      }
    });
  }
}
