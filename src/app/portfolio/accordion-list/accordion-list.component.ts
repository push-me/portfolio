import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../UI components/breadcrumb/breadcrumb.component';
import { AccordionComponent } from '../../UI components/accordion/accordion.component';
import { Accordion } from '../../UI components/accordion/accordion.component.config';

@Component({
  selector: 'app-accordion-list',
  standalone: true,
  imports: [BreadcrumbComponent, AccordionComponent],
  templateUrl: './accordion-list.component.html',
  styleUrl: './accordion-list.component.scss'
})
export class AccordionListComponent {
  accordion1: Accordion = {
    items: [
      { title: 'Item 1', content: 'Content for Item 1' },
      { title: 'Item 2', content: 'Content for Item 2' },
      { title: 'Item 3', content: 'Content for Item 3' },
      { title: 'Item 4', content: 'Content for Item 4' }
    ]
  }
}
