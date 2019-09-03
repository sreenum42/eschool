import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  SemisterEnquiriesComponent} from './semister-enquiries.component';

describe('UserComponent', () => {
  let component: SemisterEnquiriesComponent;
  let fixture: ComponentFixture<SemisterEnquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemisterEnquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemisterEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
