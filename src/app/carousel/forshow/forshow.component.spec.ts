import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForshowComponent } from './forshow.component';

describe('ForshowComponent', () => {
  let component: ForshowComponent;
  let fixture: ComponentFixture<ForshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
