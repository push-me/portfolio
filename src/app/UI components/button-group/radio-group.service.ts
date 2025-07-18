import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RadioGroupService {
  private selectedButtonSource = new Subject<string>();

  // Observable for the selected button value
  selectedButton$ = this.selectedButtonSource.asObservable();

  // Notify components when a button is selected
  selectButton(value: string) {
    this.selectedButtonSource.next(value);
  }
  constructor() { }
}
