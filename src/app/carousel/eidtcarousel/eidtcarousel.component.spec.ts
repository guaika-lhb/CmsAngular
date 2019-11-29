import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EidtcarouselComponent } from './eidtcarousel.component';

describe('EidtcarouselComponent', () => {
  let component: EidtcarouselComponent;
  let fixture: ComponentFixture<EidtcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EidtcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EidtcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
