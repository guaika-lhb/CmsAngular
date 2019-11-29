import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseindexComponent } from './courseindex.component';

describe('CourseindexComponent', () => {
  let component: CourseindexComponent;
  let fixture: ComponentFixture<CourseindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
