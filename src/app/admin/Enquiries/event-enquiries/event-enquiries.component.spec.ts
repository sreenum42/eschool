import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  EventEnquiriesComponent} from './event-enquiries.component';

describe('UserComponent', () => {
  let component: EventEnquiriesComponent;
  let fixture: ComponentFixture<EventEnquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEnquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
