import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { DropdownMenuCfg, DropdownMenuItem } from './dropdown-menu.component.config';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss',
})
export class DropdownMenuComponent {

  @Input() config!:DropdownMenuCfg
  //@Input() direction: 'left' | 'right' | 'top' | 'bottom' = 'bottom';
  //@Input() label: string = 'Dropdown';
  //@Input() btnClass: string = 'btn-primary'; // Accepts Bootstrap or custom button classes
  isOpen = false;


  toggleDropdown() {
    this.isOpen = !this.isOpen;
    
  }

  onItemClick(item: DropdownMenuItem) {
    item.action(); // Trigger the callback function
    this.isOpen = false; // Optionally close the dropdown
  }

  isTemplate(value: any): value is TemplateRef<any> {
    return value instanceof TemplateRef;
  }
}
