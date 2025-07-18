import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';
import { PaginationConfig } from './pagination.component.config';
import { PaginationService } from './pagination.component.service';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit {
  @Input() config!: PaginationConfig;

  constructor(private paginationService: PaginationService) {}
  
  pages: number[] = [];
  currentPage = 1;
  totalPages!: number;

  ngOnInit() {
    this.totalPages = Math.ceil(this.config.totalItems / this.config.itemsPerPage);
    this.buildPages();
  }

  ngAfterViewInit() {
    this.updatePaginatedItems();
  }

  buildPages() {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedItems();
    }
  }

  updatePaginatedItems() {
    const startIndex = (this.currentPage - 1) * this.config.itemsPerPage;
    const endIndex = startIndex + this.config.itemsPerPage;
    if(this.config.items) {
      const currentItems = this.config.items.slice(startIndex, endIndex);
      this.paginationService.updateDisplayedItems(currentItems); // Update service with new paginated items
    }

    
    
  }
}
