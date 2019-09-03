import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  AdmissionEnquiriesComponent} from './admission-enquiries.component';

describe('UserComponent', () => {
  let component: AdmissionEnquiriesComponent;
  let fixture: ComponentFixture<AdmissionEnquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionEnquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
