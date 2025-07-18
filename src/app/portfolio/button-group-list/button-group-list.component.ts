import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../UI components/breadcrumb/breadcrumb.component';
import { ButtonGroupComponent } from '../../UI components/button-group/button-group.component';
import { DropdownMenuComponent } from '../../UI components/dropdown-menu/dropdown-menu.component';
import { ButtonComponent } from '../../UI components/button/button.component';
import { DropdownMenuCfg } from '../../UI components/dropdown-menu/dropdown-menu.component.config';

@Component({
  selector: 'app-button-group-list',
  standalone: true,
  imports: [BreadcrumbComponent,ButtonGroupComponent,DropdownMenuComponent,ButtonComponent],
  templateUrl: './button-group-list.component.html',
  styleUrl: './button-group-list.component.scss'
})
export class ButtonGroupListComponent {
  dropdownRight:DropdownMenuCfg= {
    direction:'right',
    label:'Dropdown',
    btnClass:"btn-primary btnGroup horizontal-last",
    menu: [
      {action:()=> {console.log(1)},value: 'First'},
      {action:()=> {console.log(2)},value: 'Second'},
    ]
  }
}
