import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AlertConfig } from './alert.component.config';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IconComponent } from '../icon/icon.component';



@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule,IconComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
      })),
      transition('void <=> *', [
        animate(500)
      ]),
    ]),
  ]
})
export class AlertComponent implements OnInit {
  @Input() config!: AlertConfig;
  showAlert = true;
  containerOpacity: number = 1
  

  ngOnInit(): void {
    if (this.config.timeout) {
      setTimeout(() => this.closeAlert(), this.config.timeout);
    }
  }

  closeAlert(): void {
    this.showAlert = false;
  }

  closeWithAnimation(): void {
    this.containerOpacity = 0
    setTimeout(()=>this.containerOpacity = 1, 5000) 
  }

  getAlertClass(): string {
    return `alert alert-${this.config.type || 'info'}`;
  }
}
