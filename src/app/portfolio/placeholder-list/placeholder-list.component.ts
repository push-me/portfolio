import { Component } from '@angular/core';
import { PlaceholderComponent } from '../../UI components/placeholder/placeholder.component';
import { CardConfig } from '../../UI components/card/card.component.config';
import { CardComponent } from '../../UI components/card/card.component';
import { BreadcrumbComponent } from '../../UI components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-placeholder-list',
  standalone: true,
  imports: [CardComponent, BreadcrumbComponent],
  templateUrl: './placeholder-list.component.html',
  styleUrl: './placeholder-list.component.scss'
})
export class PlaceholderListComponent {

  card1Cfg : CardConfig = {
    imageSrc: '../../../assets/UI/gallery/girl-1.png',
    title: 'Custom Card Title',
    description: 'This is a customizable card component.',
    listItems: ['Item 1', 'Item 2', 'Item 3'],
    actions: [{ text: 'Action 1', link: '/action1' }, { text: 'Action 2', link: '/action2' }],
  }

  placeHolderCfg: CardConfig = {
    imageSrc: '../../../assets/UI/gallery/girl-1.png',
    title: 'Custom Card Title',
    description: 'This is a customizable card component.',
    listItems: ['Item 1', 'Item 2', 'Item 3'],
    actions: [{ text: 'Action 1', link: '/action1' }, { text: 'Action 2', link: '/action2' }],
    animation:'glow',
    placeholder:true
  }

  ngOnInit() {
   setTimeout(()=>this.placeHolderCfg.placeholder=false,3000)
  }
  
}
