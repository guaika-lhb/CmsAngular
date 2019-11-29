import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepagelistComponent } from './singlepagelist.component';

describe('SinglepagelistComponent', () => {
  let component: SinglepagelistComponent;
  let fixture: ComponentFixture<SinglepagelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglepagelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglepagelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
