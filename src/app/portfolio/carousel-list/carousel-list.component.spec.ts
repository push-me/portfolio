import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselListComponent } from './carousel-list.component';

describe('CarouselListComponent', () => {
  let component: CarouselListComponent;
  let fixture: ComponentFixture<CarouselListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
