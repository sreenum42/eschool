import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  AdminSeminarEditComponent} from './admin-seminar-edit.component';

describe('UserComponent', () => {
  let component: AdminSeminarEditComponent;
  let fixture: ComponentFixture<AdminSeminarEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSeminarEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSeminarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
