import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  AllEnquiriesViewComponent} from './all-enquiries-view.component';

describe('UserComponent', () => {
  let component: AllEnquiriesViewComponent;
  let fixture: ComponentFixture<AllEnquiriesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEnquiriesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEnquiriesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
