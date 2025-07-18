import { Component } from '@angular/core';
import { DropdownMenuComponent } from '../../UI components/dropdown-menu/dropdown-menu.component';
import { BreadcrumbComponent } from '../../UI components/breadcrumb/breadcrumb.component';
import { ButtonComponent } from '../../UI components/button/button.component';
import { DropdownMenuCfg } from '../../UI components/dropdown-menu/dropdown-menu.component.config';


@Component({
  selector: 'app-dropdown-list',
  standalone: true,
  imports: [DropdownMenuComponent, BreadcrumbComponent],
  templateUrl: './dropdown-list.component.html',
  styleUrl: './dropdown-list.component.scss'
})
export class DropdownListComponent {
  dropEnd:DropdownMenuCfg= {
    direction:'right',
    label:'Direction Right',
    btnClass:"btn-primary horizontal-last",
    menu: [
      {action:()=> {console.log(1)},value: 'First'},
      {action:()=> {console.log(2)},value: 'Second'},
    ]
  }

  dropStart:DropdownMenuCfg= {
    direction:'left',
    label:'Direction Left',
    btnClass:"btn-primary",
    menu: [
      {action:()=> {console.log(1)},value: 'First'},
      {action:()=> {console.log(2)},value: 'Second'},
    ]
  }

  dropdown:DropdownMenuCfg= {
    direction:'bottom',
    label:'Direction Bottom',
    btnClass:"btn-primary",
    menu: [
      {action:()=> {console.log(1)},value: 'First'},
      {action:()=> {console.log(2)},value: 'Second'},
    ]
  }

  dropUp:DropdownMenuCfg= {
    direction:'top',
    label:'Direction Top',
    btnClass:"btn-primary horizontal-last",
    menu: [
      {action:()=> {console.log(1)},value: 'First'},
      {action:()=> {console.log(2)},value: 'Second'},
    ]
  }

  primary:DropdownMenuCfg= {
    direction:'bottom',
    label:'primary',
    btnClass:"btn-primary",
    menu: [
      {action:()=> {console.log(1)},value: 'First'},
      {action:()=> {console.log(2)},value: 'Second'},
    ]
  }

  secondary:DropdownMenuCfg= {
    direction:'bottom',
    label:'secondary',
    btnClass:"btn-secondary",
    menu: [
      {action:()=> {console.log(1)},value: 'First'},
      {action:()=> {console.log(2)},value: 'Second'},
    ]
  }

  success:DropdownMenuCfg= {
    direction:'bottom',
    label:'success',
    btnClass:"btn-success",
    menu: [
      {action:()=> {console.log(1)},value: 'First'},
      {action:()=> {console.log(2)},value: 'Second'},
    ]
  }

  warning:DropdownMenuCfg= {
    direction:'bottom',
    label:'warning',
    btnClass:"btn-warning",
    menu: [
      {action:()=> {console.log(1)},value: 'First'},
      {action:()=> {console.log(2)},value: 'Second'},
    ]
  }

  danger:DropdownMenuCfg= {
    direction:'bottom',
    label:'danger',
    btnClass:"btn-danger",
    menu: [
      {action:()=> {console.log(1)},value: 'First'},
      {action:()=> {console.log(2)},value: 'Second'},
    ]
  }

  info:DropdownMenuCfg= {
    direction:'bottom',
    label:'info',
    btnClass:"btn-info",
    menu: [
      {action:()=> {console.log(1)},value: 'First'},
      {action:()=> {console.log(2)},value: 'Second'},
    ]
  }
}
