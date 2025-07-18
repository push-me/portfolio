import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Accordion } from './accordion.component.config';



@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})



export class AccordionComponent {
  @Input() config!:Accordion

  toggle(index: number) {
    this.config.items[index].expanded = !this.config.items[index].expanded;
  }

}
