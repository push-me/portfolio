import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverListComponent } from './popover-list.component';

describe('PopoverListComponent', () => {
  let component: PopoverListComponent;
  let fixture: ComponentFixture<PopoverListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopoverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
