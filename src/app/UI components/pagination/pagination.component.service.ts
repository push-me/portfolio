import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private displayedItemsSubject = new BehaviorSubject<any[]>([]);
  displayedItems$ = this.displayedItemsSubject.asObservable();

  updateDisplayedItems(items: any[]) {
    this.displayedItemsSubject.next(items);
  }
}
