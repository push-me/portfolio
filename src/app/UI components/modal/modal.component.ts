import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ButtonComponent } from '../button/button.component';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, IconComponent, ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() config: any;  // Modal config object to pass dynamic content, actions, etc.

  closeModal() {
    // You can emit an event or update a service to notify the parent component
    this.config.close();
  }
}
