import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProgressBarConfig } from './progress.component.config';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {
  @Input() config!: ProgressBarConfig;
}
