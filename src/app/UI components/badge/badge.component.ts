import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BadgeConfig } from './badge.component.config';



@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})

export class BadgeComponent implements OnInit {
 
  @Input() config!: BadgeConfig;
  badgeClass: string = 'badge '


  ngOnInit(): void {
    this.badgeClass += this.config.class
  }
}
