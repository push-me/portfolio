import { Component } from '@angular/core';
import { ButtonComponent } from '../../UI components/button/button.component';
import { BreadcrumbComponent } from '../../UI components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-button-list',
  standalone: true,
  imports: [ButtonComponent,BreadcrumbComponent],
  templateUrl: './button-list.component.html',
  styleUrl: './button-list.component.scss'
})
export class ButtonListComponent {

}
