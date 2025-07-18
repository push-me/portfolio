import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IconConfig } from './icon.component.config';
import { CommonModule } from '@angular/common';
import { SvgIconService } from './svg-icon.service';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  providers: [SvgIconService]
})
export class IconComponent implements OnInit {
  @Input() config!: IconConfig
  @ViewChild('iconContainer', { static: true }) iconContainer!: ElementRef;

  constructor(
    private svgIconService: SvgIconService, 
    private el: ElementRef, 
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    //Init default style
    if(this.config.styles) {
      this.config.styles['vertical-align'] ='middle'
    } else {
      Object.assign(this.config, {styles:{'vertical-align':'middle'}})
    }
  
    this.loadSvg();
  }

  loadSvg(): void {
    this.svgIconService.getSvg(this.config.name).subscribe(svgContent => {
      const parser = new DOMParser();
      const svg = parser.parseFromString(svgContent, 'image/svg+xml').documentElement;

      // Set size attributes dynamically
      if (this.config.size) {
        this.renderer.setAttribute(svg, 'width', this.config.size.toString());
        this.renderer.setAttribute(svg, 'height', this.config.size.toString());
      }

      
      // Apply custom styles directly to the SVG
      if (svg && this.config.styles) {
        Object.assign(svg.style,this.config.styles)
        //svg.setAttribute('style', this.config.styles); // Set inline styles
      }

      // Inject the SVG into the container
      this.renderer.appendChild(this.iconContainer.nativeElement, svg);
    });
  }

}
