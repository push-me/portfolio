import { Component } from '@angular/core';
import { CardComponent } from '../../UI components/card/card.component';
import { CardConfig } from '../../UI components/card/card.component.config';
import { BreadcrumbComponent } from '../../UI components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent, BreadcrumbComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  card1Cfg : CardConfig = {
    imageSrc: '../../../assets/UI/gallery/girl-1.png',
    title: 'Custom Card Title',
    description: 'This is a customizable card component.',
    listItems: ['Item 1', 'Item 2', 'Item 3'],
    actions: [{ text: 'Action 1', link: '/action1' }, { text: 'Action 2', link: '/action2' }],
  }

  card2Cfg : CardConfig = {
    imageSrc: '../../../assets/UI/gallery/girl-2.png',
    title: 'Custom Card Title',
    description: 'This is a customizable card component.',
    listItems: ['Item 1', 'Item 2', 'Item 3'],
    actions: [{ text: 'Action 1', link: '/action1' }, { text: 'Action 2', link: '/action2' }],
  }

  card3Cfg : CardConfig = {
    imageSrc: '../../../assets/UI/gallery/people.png',
    title: 'Custom Card Title',
    description: 'This is a customizable card component.',
    listItems: ['Item 1', 'Item 2', 'Item 3'],
    actions: [{ text: 'Action 1', link: '/action1' }, { text: 'Action 2', link: '/action2' }],
  }
}
