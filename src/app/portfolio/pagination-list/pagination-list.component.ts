import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PaginationComponent } from '../../UI components/pagination/pagination.component';
import { PaginationConfig } from '../../UI components/pagination/pagination.component.config';
import { CommonModule } from '@angular/common';
import { PaginationService } from '../../UI components/pagination/pagination.component.service';
import { BreadcrumbComponent } from '../../UI components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-pagination-list',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule,PaginationComponent],
  templateUrl: './pagination-list.component.html',
  styleUrl: './pagination-list.component.scss',
  providers:[PaginationService]
})
export class PaginationListComponent implements OnInit {
  iconImages = [
    {name:'../../../assets/UI/gallery/ocean-1.png'},
    {name:'../../../assets/UI/gallery/ocean-2.png'},
    {name:'../../../assets/UI/gallery/ocean-3.png'},
    {name:'../../../assets/UI/gallery/ocean-4.png'},
    {name:'../../../assets/UI/gallery/waterfall.png'},
    {name:'../../../assets/UI/gallery/bananas.png'},
  ]

  allItems:any = [
    {name:'../../../assets/UI/gallery/ocean-1.png'},
    {name:'../../../assets/UI/gallery/ocean-2.png'},
    {name:'../../../assets/UI/gallery/ocean-3.png'},
    {name:'../../../assets/UI/gallery/ocean-4.png'},
    {name:'../../../assets/UI/gallery/waterfall.png'},
    {name:'../../../assets/UI/gallery/bananas.png'},
  ]  // Example list of items
  displayedItems: any[]=[]; // Items for the current page
  constructor(
    private paginationService: PaginationService,
    private cd:ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.paginationService.displayedItems$.subscribe(items => {
      this.displayedItems = items;
      // Mark for check to avoid ExpressionChangedAfterItHasBeenCheckedError
      this.cd.detectChanges();  // This forces a check after the items are updated
    });
  }

  paginationConfig: PaginationConfig = {
    totalItems: this.allItems.length,
    itemsPerPage: 2, // Items per page
    useIcons: false, // Optional, use icons or text for navigation
    items: this.allItems, // The actual data to be paginated
  };

  paginationWithIconCfg: PaginationConfig = {
    totalItems: this.iconImages.length,
    itemsPerPage: 2, // Items per page
    useIcons:true,
    previousIcon:'double-arrow-left',
    nextIcon:'double-arrow-right',
    items: this.iconImages, // The actual data to be paginated
  };

  onPageChange(paginatedItems: any[]) {
    this.displayedItems = paginatedItems; // Update displayed items
  }

  paginationCfg: any = {
    totalItems: 30,
    itemsPerPage: 5,
    // useIcons: true,
    // previousIcon: { name: 'left-arrow', styles: { color: 'blue' } },
    // nextIcon: { name: 'right-arrow', styles: { color: 'blue' } },
  }
}
