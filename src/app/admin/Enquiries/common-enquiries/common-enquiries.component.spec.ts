import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  CommonEnquiriesComponent} from './common-enquiries.component';

describe('UserComponent', () => {
  let component: CommonEnquiriesComponent;
  let fixture: ComponentFixture<CommonEnquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonEnquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
