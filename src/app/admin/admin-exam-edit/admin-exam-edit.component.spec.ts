import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  AdminExamEditComponent} from './admin-exam-edit.component';

describe('UserComponent', () => {
  let component: AdminExamEditComponent;
  let fixture: ComponentFixture<AdminExamEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExamEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExamEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
