import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DEFAULT_TOAST_CONFIG, ToastConfig } from './toast.component.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent implements OnInit, OnDestroy {
  @Input() config: ToastConfig = DEFAULT_TOAST_CONFIG;

  // Array to store multiple toasts
  toasts: ToastConfig[] = [];

  ngOnInit(): void {
    this.addToast(this.config);
  }

  ngOnDestroy(): void {
    // Clean up toasts on component destroy
    this.toasts = [];
  }

  // Method to add a toast to the stack
  addToast(toastConfig: ToastConfig): void {
    this.toasts.push({ ...DEFAULT_TOAST_CONFIG, ...toastConfig });
    
    setTimeout(() => this.removeToast(toastConfig), toastConfig.duration || DEFAULT_TOAST_CONFIG.duration);
  }

  // Method to remove a toast from the stack
  removeToast(toastConfig: ToastConfig): void {
    
    this.toasts = this.toasts.filter(toast => { toast !== toastConfig});
   
  }

  // Method to return dynamic CSS classes based on config position
  getPositionClass(position: string): string {
    return `toast-container-${position}`;
  }

}
