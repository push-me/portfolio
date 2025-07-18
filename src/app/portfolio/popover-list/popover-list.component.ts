import { Component } from '@angular/core';
import { PopoverComponent } from '../../UI components/popover/popover.component';
import { PopoverConfig } from '../../UI components/popover/popover.component.config';
import { BreadcrumbComponent } from '../../UI components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-popover-list',
  standalone: true,
  imports: [PopoverComponent, BreadcrumbComponent],
  templateUrl: './popover-list.component.html',
  styleUrl: './popover-list.component.scss'
})
export class PopoverListComponent {
  popoverConfigTop:PopoverConfig = {
    content: 'Top popover content',
    btnText:'Top',
    placement: 'top',
    parentStyle: { backgroundColor: '#f8f9fa', color: '#333' }
  };

  popoverConfigRight :PopoverConfig = {
    btnText:'Right',
    content: 'Right popover content',
    placement: 'right'
  };

  popoverConfigLeft:PopoverConfig = {
    btnText:'Left',
    content: 'Left popover content',
    placement: 'left'
  };

  popoverConfigBottom:PopoverConfig = {
    btnText:'Bottom',
    content: 'Bottom popover content',
    placement: 'bottom'
  };

  popTitleCfg:PopoverConfig = {
    btnText:'With title',
    content: 'Body',
    title: 'Title',
    placement: 'right'
  }

  customTopCfg:PopoverConfig = {
    btnText:'Top',
    btnType: {type:'dark'},
    content: 'Body',
    title: 'Title',
    placement: 'top',
    arrow: {
      border:'black',
      color:'white'
    },
    parentStyle: {
      'border-color':'black'
    },
    titleStyle: {
      'background-color':'black',
      'color':'white'
    }
  }

  customLeftCfg:PopoverConfig = {
    btnText:'Left',
    btnType: {type:'info'},
    content: 'Body',
    title: 'Title',
    placement: 'left',
    arrow: {
      border:'#17a2b8',
      color:'white'
    },
    parentStyle: {
      'border-color':'#17a2b8'
    },
    titleStyle: {
      'background-color':'#17a2b8',
      'color':'black'
    }
  }

  customRightCfg:PopoverConfig = {
    btnText:'Right',
    btnType: {type:'danger'},
    content: 'Body',
    title: 'Title',
    placement: 'right',
    arrow: {
      border:'#dc3545',
      color:'white'
    },
    parentStyle: {
      'border-color':'#dc3545'
    },
    titleStyle: {
      'background-color':'#dc3545',
      'color':'white'
    }
  }

  customBottomCfg:PopoverConfig = {
    btnText:'Bottom',
    btnType: {type:'warning'},
    content: 'Body',
    title: 'Title',
    placement: 'bottom',
    arrow: {
      border:'#ffc107',
      color:'white'
    },
    parentStyle: {
      'border-color':'#ffc107'
    },
    titleStyle: {
      'background-color':'#ffc107',
      'color':'black'
    }
  }

  popTitleTopCfg:PopoverConfig = {
    btnText:'Title Top',
    content: 'Body',
    btnType: {type:'secondary'},
    title: 'Title',
    placement: 'top'
  }

  popTitleLeftCfg:PopoverConfig = {
    btnText:'Title Left',
    btnType: {type:'secondary'},
    content: 'Body',
    title: 'Title',
    placement: 'left'
  }

  popTitleRightCfg:PopoverConfig = {
    btnText:'Title Right',
    btnType: {type:'secondary'},
    content: 'Body',
    title: 'Title',
    placement: 'right'
  }

  popTitleBottomCfg:PopoverConfig = {
    btnText:'Title Bottom',
    btnType: {type:'secondary'},
    content: 'Body',
    title: 'Title',
    placement: 'bottom'
  }
}
