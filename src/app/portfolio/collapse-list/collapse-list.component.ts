import { Component } from '@angular/core';
import { CollapseGroupComponent } from '../../UI components/collapse/collapse-group/collapse-group.component';
import { BreadcrumbComponent } from '../../UI components/breadcrumb/breadcrumb.component';
import { CollapseComponent } from '../../UI components/collapse/collapse.component';

@Component({
  selector: 'app-collapse-list',
  standalone: true,
  imports: [CollapseGroupComponent,CollapseComponent ,BreadcrumbComponent],
  templateUrl: './collapse-list.component.html',
  styleUrl: './collapse-list.component.scss'
})
export class CollapseListComponent {

}
