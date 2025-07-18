import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BreadCrumbCfg, BreadcrumbItem } from './breadcrumb.component.config';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterModule,CommonModule,IconComponent],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})

export class BreadcrumbComponent {
  @Input() items: BreadcrumbItem[] = [];
  private _divider: string | null = '/';
  safeDivider: SafeHtml | null = null;

  constructor(private sanitizer: DomSanitizer) {

  }

  @Input() config!:BreadCrumbCfg

  @Input()
  set divider(value: string | null) {
    this._divider = value;
    this.safeDivider = this.isSvgDivider() ? this.sanitizeSvg(value) : value;
  }

  get divider(): string | null {
    return this._divider;
  }

  // Check if the divider is an SVG (based on whether it contains '<svg')
  isSvgDivider(): boolean {
    return this._divider?.includes('<svg') || false;
  }

  // Sanitize the SVG string
  sanitizeSvg(svg: string | null): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg || '');
  }

  isTextDivider(): boolean {
    return typeof this.divider === 'string';
  }
}
