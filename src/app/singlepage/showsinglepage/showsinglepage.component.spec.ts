import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsinglepageComponent } from './showsinglepage.component';

describe('ShowsinglepageComponent', () => {
  let component: ShowsinglepageComponent;
  let fixture: ComponentFixture<ShowsinglepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsinglepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsinglepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
