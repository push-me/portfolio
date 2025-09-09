import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../UI components/breadcrumb/breadcrumb.component';
import { CarouselComponent } from '../../UI components/carousel/carousel.component';

@Component({
  selector: 'app-carousel-list',
  standalone: true,
  imports: [BreadcrumbComponent,CarouselComponent],
  templateUrl: './carousel-list.component.html',
  styleUrl: './carousel-list.component.scss'
})
export class CarouselListComponent {
  imageList:string[] = [
    'assets/UI/gallery/ocean-1.png',
    'assets/UI/gallery/ocean-2.png',
    'assets/UI/gallery/ocean-3.png',
    'assets/UI/gallery/ocean-4.png',
    'assets/UI/gallery/waterfall.png',
    'assets/UI/gallery/bananas.png',
    'assets/UI/gallery/elephants.png',
  ]
}
