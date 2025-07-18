import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../UI components/breadcrumb/breadcrumb.component';
import { ProgressComponent } from '../../UI components/progress/progress.component';

@Component({
  selector: 'app-progress-list',
  standalone: true,
  imports: [BreadcrumbComponent,ProgressComponent],
  templateUrl: './progress-list.component.html',
  styleUrl: './progress-list.component.scss'
})
export class ProgressListComponent {

}
