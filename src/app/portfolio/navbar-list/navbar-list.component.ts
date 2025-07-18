import { Component } from '@angular/core';
import { NavbarConfig } from '../../UI components/navbar/navbar.component.config';
import { NavbarComponent } from '../../UI components/navbar/navbar.component';
import { BreadcrumbComponent } from '../../UI components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-navbar-list',
  standalone: true,
  imports: [NavbarComponent, BreadcrumbComponent],
  templateUrl: './navbar-list.component.html',
  styleUrl: './navbar-list.component.scss'
})
export class NavbarListComponent {
  cfg:NavbarConfig = {
    orientation: 'horizontal',
    elements: [
      { type: 'button', label: 'Home', action: () => console.log('Home clicked') },
      { type: 'link', label: 'About', url: '/about' },
      {
        type: 'dropdown',
        label: 'Services',
        dropdownItems: [
          { label: 'Web Development', action: () => console.log('Web Development clicked') },
          { label: 'SEO', action: () => console.log('SEO clicked') }
        ]
      },
      { type: 'search-bar', placeholder: 'Search...' }
    ]
  }

  navBarCfg: NavbarConfig = {
    orientation: 'vertical',
    elements: [
      {
        type: 'button',
        label: 'Dashboard',
        action: () => console.log('Dashboard clicked')
      },
      {
        type: 'dropdown',
        label: 'Settings',
        dropdownItems: [
          { label: 'Profile Settings', action: () => console.log('Profile Settings clicked') },
          { label: 'Account Settings', action: () => console.log('Account Settings clicked') },
          {
            label: 'More Settings',
            action: () => console.log('More Settings clicked')
          }
        ]
      },
      {
        type: 'search-bar',
        placeholder: 'Search...'
      }
    ]
  };

  horNavCfg: NavbarConfig = {
    orientation: 'horizontal',
    elements: [
      {
        type: 'button',
        label: 'Navbar',
        action: () => console.log('Navbar clicked')
      },
      {
        type: 'button',
        label: 'Home',
        action: () => console.log('Home clicked')
      },
      {
        type: 'link',
        label: 'Link',
        url: '/link'
      },
      {
        type: 'dropdown',
        label: 'Dropdown',
        dropdownItems: [
          { label: 'Action', action: () => console.log('Action clicked') },
          { label: 'Another action', action: () => console.log('Another action clicked') }
        ]
      },
      {
        type: 'button',
        label: 'Disabled',
        action: () => console.log('Disabled clicked'),
        // Add any custom disabling logic here if necessary
      },
      {
        type: 'search-bar',
        placeholder: 'Search...'
      }
    ]
  }

}
