import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipListComponent } from './tooltip-list.component';

describe('TooltipListComponent', () => {
  let component: TooltipListComponent;
  let fixture: ComponentFixture<TooltipListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
