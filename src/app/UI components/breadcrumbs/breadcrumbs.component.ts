import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {

}
