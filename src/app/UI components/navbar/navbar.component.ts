import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavbarConfig } from './navbar.component.config';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() config!: NavbarConfig;
  isNavbarCollapsed = true;
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
