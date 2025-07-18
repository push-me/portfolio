import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../UI components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-breadcrumb-list',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './breadcrumb-list.component.html',
  styleUrl: './breadcrumb-list.component.scss'
})
export class BreadcrumbListComponent {

}
