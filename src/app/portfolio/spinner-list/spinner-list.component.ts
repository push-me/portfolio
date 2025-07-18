import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../UI components/breadcrumb/breadcrumb.component';
import { SpinnerComponent } from '../../UI components/spinner/spinner.component';
import { SpinnerConfig } from '../../UI components/spinner/spinner.component.config';
import { ButtonComponent } from '../../UI components/button/button.component';

@Component({
  selector: 'app-spinner-list',
  standalone: true,
  imports: [BreadcrumbComponent,SpinnerComponent,ButtonComponent],
  templateUrl: './spinner-list.component.html',
  styleUrl: './spinner-list.component.scss'
})
export class SpinnerListComponent {
  spinPrimaryCfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(13,110,253)'
  }

  spinSecondaryCfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(108,117,125)'
  }

  spinSuccessCfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(25,135,84)'
  }

  spinDangerCfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(220,53,69)'
  }

  spinWarningCfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(255,193,7)'
  }

  spinInfoCfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(13,202,240)'
  }

  spinLightCfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(255,250,250)'
  }

  spinDarkCfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(33,37,41)'
  }

  GrowPrimaryCfg:SpinnerConfig = {
    type: 'growing',
    position: 'horizontal',
    color: 'rgb(13,110,253)'
  }

  GrowSecondaryCfg:SpinnerConfig = {
    type: 'growing',
    position: 'horizontal',
    color: 'rgb(108,117,125)'
  }

  GrowSuccessCfg:SpinnerConfig = {
    type: 'growing',
    position: 'horizontal',
    color: 'rgb(25,135,84)'
  }

  GrowDangerCfg:SpinnerConfig = {
    type: 'growing',
    position: 'horizontal',
    color: 'rgb(220,53,69)'
  }

  GrowWarningCfg:SpinnerConfig = {
    type: 'growing',
    position: 'horizontal',
    color: 'rgb(255,193,7)'
  }

  GrowInfoCfg:SpinnerConfig = {
    type: 'growing',
    position: 'horizontal',
    color: 'rgb(13,202,240)'
  }

  GrowLightCfg:SpinnerConfig = {
    type: 'growing',
    position: 'horizontal',
    color: 'rgb(255,250,250)'
  }

  GrowDarkCfg:SpinnerConfig = {
    type: 'growing',
    position: 'horizontal',
    color: 'rgb(33,37,41)'
  }

  spinLoadingPrimaryCfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(152, 115, 55)',
    text:'Loading...'
  }

  spinLoadingSuccessCfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(152, 115, 55)',
    text:'Loading...'
  }

  spinLoadingWarningCfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(152, 115, 55)',
    text:'Loading...'
  }

  spinLoadingDangerCfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(233, 200, 244)',
    text:'Loading...'
  }

  spinLoadingInfoCfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(152, 115, 55)',
    text:'Loading...'
  }

  spinLoadingLightCfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(152, 115, 55)',
    text:'Loading...'
  }

  spinLoadingDarkCfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(152, 115, 55)',
    text:'Loading...'
  }

  spinLoadingSecondaryCfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(233, 200, 244)',
    text:'Loading...'
  }

  custom1Cfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(6, 62, 71)',
 
  }

  custom2Cfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(120, 33, 79)',
  }

  custom3Cfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(175, 177, 10)',
  }

  custom4Cfg:SpinnerConfig = {
    type: 'default',
    position: 'horizontal',
    color: 'rgb(231, 93, 7)',
  }

  customGrow1Cfg:SpinnerConfig = {
    type: 'growing',
    position: 'horizontal',
    color: 'rgb(6, 62, 71)',
 
  }

  customGrow2Cfg:SpinnerConfig = {
    type: 'growing',
    position: 'horizontal',
    color: 'rgb(120, 33, 79)',
  }

  customGrow3Cfg:SpinnerConfig = {
    type: 'growing',
    position: 'horizontal',
    color: 'rgb(175, 177, 10)',
  }

  customGrow4Cfg:SpinnerConfig = {
    type: 'growing',
    position: 'horizontal',
    color: 'rgb(231, 93, 7)',
  }
}
