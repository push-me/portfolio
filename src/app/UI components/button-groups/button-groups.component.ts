import { Component } from '@angular/core';
import { ButtonGroupComponent } from '../button-group/button-group.component';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { ButtonToggleDirective } from '../button-group/button-toggle.directive';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { RadioGroupComponent } from '../radio-group/radio-group.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-button-groups',
  standalone: true,
  imports: [
    ButtonGroupComponent,
    DropdownMenuComponent,
    ButtonToggleDirective,
    BreadcrumbComponent,
    ButtonComponent,
    RadioGroupComponent
  ],
  templateUrl: './button-groups.component.html',
  styleUrl: './button-groups.component.scss'
})
export class ButtonGroupsComponent {

}
