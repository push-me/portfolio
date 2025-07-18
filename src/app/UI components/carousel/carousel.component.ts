import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CarouselConfig } from './carousel.component.config';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() config!: CarouselConfig;
  animationDirection!:string
  currentIndex = 0;
  prevClicked:boolean = false;
  nextClicked:boolean = false;
  prevImg!:number
  autoplayInterval: any;
  captions : string[] | undefined; // You can pass captions as part of the config.

  ngOnInit() {
    if(this.config) {
      this.captions = this.config.captions
    }
  
    if (this.config.autoplay) {
      this.startAutoplay();
    }
  }

  ngOnDestroy() {
    clearInterval(this.autoplayInterval);
  }

  get previousIndex(): number {
    return (this.currentIndex === 0) ? this.config.images.length - 1 : this.currentIndex - 1;
  }

  get nextIndex(): number {
    return (this.currentIndex === this.config.images.length - 1) ? 0 : this.currentIndex + 1;
  }


  prev() {
    this.prevClicked = true
    this.nextClicked = false
    this.prevImg = this.currentIndex
    this.currentIndex = (this.currentIndex === 0) ? this.config.images.length - 1 : this.currentIndex - 1;
  }

  next() {
    this.nextClicked = true
    this.prevClicked = false
    
    this.prevImg = this.currentIndex
    this.currentIndex = (this.currentIndex === this.config.images.length - 1) ? 0 : this.currentIndex + 1;
  }

  goToSlide(index: number) {
    this.prevImg = this.currentIndex
    
    if(index > this.currentIndex) {
      this.nextClicked = true
      this.prevClicked = false
    } else {
      this.prevClicked = true
      this.nextClicked = false
    }
    
    this.currentIndex = index;
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.next();
    }, this.config.autoplaySpeed || 3000);
  }

  stopAutoplay() {
    clearInterval(this.autoplayInterval);
  }
}
