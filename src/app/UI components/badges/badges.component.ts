import { Component } from '@angular/core';
import { BadgeConfig } from '../badge/badge.component.config';
import { BadgeComponent } from '../badge/badge.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-badges',
  standalone: true,
  imports: [BadgeComponent, BreadcrumbComponent],
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.scss'
})
export class BadgesComponent {
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
}
