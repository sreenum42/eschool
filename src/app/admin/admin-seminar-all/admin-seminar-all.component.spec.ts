import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  AdminSeminarAllComponent} from './admin-seminar-all.component';

describe('UserComponent', () => {
  let component: AdminSeminarAllComponent;
  let fixture: ComponentFixture<AdminSeminarAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSeminarAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSeminarAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
