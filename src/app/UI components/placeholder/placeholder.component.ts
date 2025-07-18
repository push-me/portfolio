import { Component, ElementRef, Input, QueryList, ContentChildren, ChangeDetectorRef } from '@angular/core';
import { PlaceholderConfig } from './placeholder.component.config';
import { CommonModule } from '@angular/common';
import { PlaceholderService } from './placeholder.component.service';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.scss',
  providers:[PlaceholderService]
})
export class PlaceholderComponent {
  @Input() config!: PlaceholderConfig;  // Expecting the external config
 
  // Dynamic styles applied in the template
  public styles: any = [];

  constructor(
    private placeholderService: PlaceholderService,
    private cd : ChangeDetectorRef
  ) {}

  ngAfterContentInit(): void {
    // Subscribe to dimensions changes
    this.placeholderService.dimensions$.subscribe(dimensions => {
      this.styles = dimensions.map(dimension => ({
        width: `${dimension.width}px`,
        height: `${dimension.height}px`,
        backgroundColor: this.config.backgroundColor || '#ccc'
      }));

      this.cd.detectChanges();
    });
  }

}
