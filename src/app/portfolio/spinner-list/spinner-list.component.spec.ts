import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerListComponent } from './spinner-list.component';

describe('SpinnerListComponent', () => {
  let component: SpinnerListComponent;
  let fixture: ComponentFixture<SpinnerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
