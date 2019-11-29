import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslistforuserComponent } from './newslistforuser.component';

describe('NewslistforuserComponent', () => {
  let component: NewslistforuserComponent;
  let fixture: ComponentFixture<NewslistforuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewslistforuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslistforuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
