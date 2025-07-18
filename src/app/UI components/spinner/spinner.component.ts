import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SpinnerConfig } from './spinner.component.config';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  @Input() config!: SpinnerConfig;
}
