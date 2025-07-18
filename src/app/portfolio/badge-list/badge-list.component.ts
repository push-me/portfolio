import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../UI components/breadcrumb/breadcrumb.component';
import { BadgeComponent } from '../../UI components/badge/badge.component';
import { BadgeConfig } from '../../UI components/badge/badge.component.config';

@Component({
  selector: 'app-badge-list',
  standalone: true,
  imports: [BreadcrumbComponent, BadgeComponent],
  templateUrl: './badge-list.component.html',
  styleUrl: './badge-list.component.scss'
})
export class BadgeListComponent {
  headerCfg: BadgeConfig = {
    text: '5',
    class: 'badgeRound'
  }

  rectCfg: BadgeConfig = {
    text: 'New',
    class: 'badgeRect'
  }

  btnCfg: BadgeConfig = {
    text: '8',
    class: 'badgeBtn'
  }

  badgeTopCfg: BadgeConfig = {
    text: '99+',
    class: 'badgeBtnTop'
  }

  profileCfg: BadgeConfig = {
    text: '',
    class: 'badgePfofile'
  }

  primaryCfg: BadgeConfig = {
    text: 'Primary',
    class: 'primary'
  }

  secondaryCfg: BadgeConfig = {
    text: 'Secondary',
    class: 'secondary'
  }

  successCfg: BadgeConfig = {
    text: 'Success',
    class: 'success'
  }

  dangerCfg: BadgeConfig = {
    text: 'Danger',
    class: 'danger'
  }

  warningCfg: BadgeConfig = {
    text: 'Warning',
    class: 'warning'
  }

  infoCfg: BadgeConfig = {
    text: 'Info',
    class: 'info'
  }

  lightCfg: BadgeConfig = {
    text: 'Light',
    class: 'light'
  }

  darkCfg: BadgeConfig = {
    text: 'Dark',
    class: 'dark'
  }
}
