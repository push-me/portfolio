import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { RadioGroupService } from './radio-group.service';

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.scss'
})
export class ButtonGroupComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal'; // Default to horizontal
}
