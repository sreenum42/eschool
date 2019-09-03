import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  AdminExamAllComponent} from './admin-exam-all.component';

describe('UserComponent', () => {
  let component: AdminExamAllComponent;
  let fixture: ComponentFixture<AdminExamAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExamAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExamAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
