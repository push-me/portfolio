import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../UI components/breadcrumb/breadcrumb.component';
import { ModalComponent } from '../../UI components/modal/modal.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../UI components/button/button.component';

@Component({
  selector: 'app-modal-list',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, ModalComponent, ButtonComponent],
  templateUrl: './modal-list.component.html',
  styleUrl: './modal-list.component.scss'
})
export class ModalListComponent {
  isModalOpen = false;

  modalConfig = {
    title: 'Confirmation',
    actions: [
      { label: 'OK', handler: () => this.onConfirm() },
      { label: 'Cancel', handler: () => this.closeModal() }
    ],
    close: () => this.closeModal()
  };

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onConfirm() {
    console.log('Confirmed!');
    this.closeModal();
  }
}
