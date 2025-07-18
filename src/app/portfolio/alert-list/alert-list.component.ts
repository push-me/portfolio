import { Component, ViewChild } from '@angular/core';
import { AlertComponent } from '../../UI components/alert/alert.component';
import { AlertConfig } from '../../UI components/alert/alert.component.config';
import { BreadcrumbComponent } from '../../UI components/breadcrumb/breadcrumb.component';
import { ButtonComponent } from '../../UI components/button/button.component';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [AlertComponent, BreadcrumbComponent,ButtonComponent],
  templateUrl: './alert-list.component.html',
  styleUrl: './alert-list.component.scss'
})
export class AlertListComponent {
  @ViewChild(AlertComponent) alertComponent!: AlertComponent;

  triggerAlertClose(alertToClose: AlertComponent): void {
    setTimeout(() => alertToClose.closeWithAnimation(), 2000)
      ;
  }

  btnCfg: AlertConfig = {
    type: 'success',
    message: 'Alert with close button',
    dismissible: true
  }

  timerCfg: AlertConfig = {
    type: 'success',
    message: 'Alert with timer',
    dismissible: false
  }

  linkCfg: AlertConfig = {
    type: 'success',
    htmlMessage: 'Alert with a <a class="htmlMessage" href=\'#\'>Link</a>',
    dismissible: false
  }

  extraContentCfg: AlertConfig = {
    type: 'success',
    htmlMessage: '<h2>Alert with HTML and divider</h2> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, ut! Beatae deleniti quae minima libero temporibus magni voluptatum, aliquam aut, praesentium placeat, nobis quo pariatur magnam necessitatibus ullam similique laborum!</p> <hr>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, ut! Beatae deleniti quae minima libero temporibus magni voluptatum, aliquam aut, praesentium placeat, nobis quo pariatur magnam necessitatibus ullam similique laborum!',
    dismissible: false
  }

  iconCfg: AlertConfig = {
    type: 'success',
    htmlMessage: ' <span class="alertIcon material-symbols-outlined">warning</span> Alert with icon',
    dismissible: false
  }
}
