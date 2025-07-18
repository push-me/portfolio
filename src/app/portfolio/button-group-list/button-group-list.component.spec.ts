import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGroupListComponent } from './button-group-list.component';

describe('ButtonGroupListComponent', () => {
  let component: ButtonGroupListComponent;
  let fixture: ComponentFixture<ButtonGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGroupListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
