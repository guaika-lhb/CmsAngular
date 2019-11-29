import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsinglepageComponent } from './editsinglepage.component';

describe('EditsinglepageComponent', () => {
  let component: EditsinglepageComponent;
  let fixture: ComponentFixture<EditsinglepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsinglepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsinglepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
