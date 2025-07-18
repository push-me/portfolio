import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../UI components/breadcrumb/breadcrumb.component';
import { TooltipComponent } from '../../UI components/tooltip/tooltip.component';
import { TooltipConfig } from '../../UI components/tooltip/tooltip.component.config';
import { ButtonComponent } from '../../UI components/button/button.component';


@Component({
  selector: 'app-tooltip-list',
  standalone: true,
  imports: [BreadcrumbComponent, TooltipComponent, ButtonComponent],
  templateUrl: './tooltip-list.component.html',
  styleUrl: './tooltip-list.component.scss'
})
export class TooltipListComponent {
  tooltipConfigTop : TooltipConfig = {
    text: 'Tooltip on top',
    color: '#fff',
    backgroundColor: '#000',
    position: 'top'
  }

  tooltipConfigLeft : TooltipConfig = {
    text: 'Tooltip on left',
    color: '#fff',
    backgroundColor: '#000',
    position: 'left'
  }

  tooltipConfigRight : TooltipConfig = {
    text: 'Tooltip on right',
    color: '#fff',
    backgroundColor: '#000',
    position: 'right'
  }

  tooltipConfigBottom : TooltipConfig = {
    text: 'Tooltip on bottom',
    color: '#fff',
    backgroundColor: '#000',
    position: 'bottom'
  }

  customTooltip : TooltipConfig = {
    text: 'Custom tooltip',
    color: '#987092',
    backgroundColor: '#363625',
    position: 'top'
  }
}
