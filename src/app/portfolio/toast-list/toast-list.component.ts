import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { BreadcrumbComponent } from '../../UI components/breadcrumb/breadcrumb.component';
import { ToastComponent } from '../../UI components/toast/toast.component';
import { ButtonComponent } from '../../UI components/button/button.component';
import { ToastConfig } from '../../UI components/toast/toast.component.config';
import { ButtonCfg } from '../../UI components/button/button.component.config';

@Component({
  selector: 'app-toast-list',
  standalone: true,
  imports: [BreadcrumbComponent, ButtonComponent],
  templateUrl: './toast-list.component.html',
  styleUrl: './toast-list.component.scss'
})
export class ToastListComponent {

  // RELATIVE TOASTS

  
  relTopLeft: ToastConfig = {
    message: 'Your action was successful!',
    duration: 5000,
    position: 'top-left',
    customStyle: {position:'absolute', backgroundColor: 'blue' },
    customClass: 'my-toast'
  }

  relTopMiddle: ToastConfig = {
    message: 'Your action was successful!',
    duration: 5000,
    position: 'top-center',
    iconStyle:{backgroundColor:'#6c757d'},
    customStyle: {position:'absolute', backgroundColor: '#6c757d' },
    
  }

  relMiddleLeft: ToastConfig = {
    message: 'Your action was successful!',
    duration: 5000,
    position: 'middle-left',
    iconStyle:{backgroundColor:'#28a745'},
    customStyle: {position:'absolute', backgroundColor: '#28a745' },
  }

  relMiddleCenter: ToastConfig = {
    message: 'Your action was successful!',
    duration: 5000,
    position: 'middle-center',
    iconStyle:{backgroundColor:'#17a2b8'},
    customStyle: {position:'absolute', backgroundColor: '#17a2b8' },
  }

  relMiddleRight: ToastConfig = {
    message: 'Your action was successful!',
    duration: 5000,
    position: 'middle-right',
    iconStyle:{backgroundColor:'#212529'},
    bodyStyle:{color:'white'},
    customStyle: {position:'absolute', backgroundColor: '#212529' },
  }

  relBottomLeft: ToastConfig = {
    message: 'Your action was successful!',
    duration: 5000,
    position: 'bottom-left',
    iconStyle:{backgroundColor:'#ffc107'},
    customStyle: {position:'absolute', backgroundColor: '#ffc107' },
  }

  relBottomCenter: ToastConfig = {
    message: 'Your action was successful!',
    duration: 5000,
    position: 'bottom-center',
    iconStyle:{backgroundColor:'rgb(184, 76, 102)'},
    customStyle: {position:'absolute', backgroundColor: 'rgb(184, 76, 102)' },
  }

  relBottomRight: ToastConfig = {
    message: 'Your action was successful!',
    duration: 5000,
    position: 'bottom-right',
    iconStyle:{backgroundColor:'rgb(226, 23, 214)'},
    customStyle: {position:'absolute', backgroundColor: 'rgb(226, 23, 214)' },
  }

  relTopRight: ToastConfig = {
    message: 'Your action was successful!',
    duration: 5000,
    position: 'top-right',
    iconStyle:{backgroundColor:'red'},
    customStyle: {position:'absolute', backgroundColor: '#dc3545' },
  }






  //BUTTONS


  botCenter:ButtonCfg ={
    type:'warning',
    styles:{
      backgroundColor:'#b84c66',
      whiteSpace:'nowrap'
    }
  }

  botRight:ButtonCfg = {
    type:'warning',
    styles:{
      backgroundColor:'#e217d6',
      whiteSpace:'nowrap'
    }
  }






  //ABSOLUTE TOASTS



  absTopLeft:ToastConfig= {
    message: 'Your action was successful!',
    duration: 5000,
    position: 'top-left',
    iconStyle:{backgroundColor:'#007bff'},
    customStyle:{backgroundColor: '#007bff'}
  }

  absTopCenter:ToastConfig= {
    message: 'Your action was successful!',
    duration: 5000,
    position: 'top-center',
    iconStyle:{backgroundColor:'#6c757d'},
    customStyle:{backgroundColor: '#6c757d'}
  }

  absTopRight:ToastConfig= {
    message: 'Your action was successful!',
    duration: 5000,
    position: 'top-right',
    iconStyle:{backgroundColor:'#dc3545'},
    customStyle:{backgroundColor: '#dc3545'}
  }

  absMiddleLeft:ToastConfig= {
    message: 'Your action was successful!',
    duration: 5000,
    position: 'middle-left',
    iconStyle:{backgroundColor:'#28a745'},
    customStyle:{backgroundColor: '#28a745'}
  }

  absMiddleCenter:ToastConfig= {
    message: 'Your action was successful!',
    duration: 5000,
    position: 'middle-center',
    iconStyle:{backgroundColor:'#17a2b8'},
    customStyle:{backgroundColor: '#17a2b8'}
  }

  absMiddleRight:ToastConfig= {
    message: 'Your action was successful!',
    duration: 5000,
    position: 'middle-right',
    bodyStyle:{color:'white'},
    iconStyle:{backgroundColor:'#212529'},
    customStyle:{backgroundColor: '#212529'}
  }

  absBottomLeft:ToastConfig= {
    message: 'Your action was successful!',
    duration: 5000,
    position: 'bottom-left',
    iconStyle:{backgroundColor:'#ffc107'},
    customStyle:{backgroundColor: '#ffc107'}
  }

  absBottomCenter:ToastConfig= {
    message: 'Your action was successful!',
    duration: 5000,
    position: 'bottom-center',
    iconStyle:{backgroundColor:'rgb(184, 76, 102)'},
    customStyle:{backgroundColor: 'rgb(184, 76, 102)'}
  }

  absBottomRight:ToastConfig= {
    message: 'Your action was successful!',
    duration: 5000,
    position: 'bottom-right',
    iconStyle:{backgroundColor:'rgb(226, 23, 214)'},
    customStyle:{backgroundColor: 'rgb(226, 23, 214)'}
  }

  private componentRef!: ComponentRef<ToastComponent>;

  @ViewChild('toastContainer', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  addToast(toast: ToastConfig) {

    this.componentRef = this.container.createComponent(ToastComponent);
    this.componentRef.instance.config = toast;

    // Manually call the `addToast()` method
    this.componentRef.instance.addToast(toast);
  }
}
