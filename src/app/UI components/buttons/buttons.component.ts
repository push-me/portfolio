import { Component } from '@angular/core';
import { ButtonDirective } from './button.directive';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [ButtonDirective, BreadcrumbComponent, ButtonComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

}
