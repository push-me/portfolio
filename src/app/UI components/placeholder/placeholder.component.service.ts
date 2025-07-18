import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlaceholderService {
    private dimensionsSubject = new BehaviorSubject<any[]>([]);
    dimensions$ = this.dimensionsSubject.asObservable();

    // Method to update dimensions
    updateDimensions(dimensions: any[]): void {
        this.dimensionsSubject.next(dimensions);
    }
}
