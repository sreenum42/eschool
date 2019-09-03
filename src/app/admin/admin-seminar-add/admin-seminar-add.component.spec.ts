import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  AdminSeminarAddComponent} from './admin-seminar-add.component';

describe('UserComponent', () => {
  let component: AdminSeminarAddComponent;
  let fixture: ComponentFixture<AdminSeminarAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSeminarAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSeminarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
