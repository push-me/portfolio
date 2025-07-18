import { Component, OnDestroy, OnInit } from '@angular/core';
import { RadioGroupService } from './radio-group.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss',
  providers: [RadioGroupService]
})
export class RadioGroupComponent implements OnInit,OnDestroy {
  private subscription!: Subscription;

  constructor(private radioGroupService: RadioGroupService) {}

  ngOnInit() {
    // Subscribing to the selected button observable
    this.subscription = this.radioGroupService.selectedButton$.subscribe(value => {
      console.log('Button selected:', value);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe(); // Clean up subscription
    }
  }
}
