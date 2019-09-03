import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCoursesComponent } from './admin-add-courses.component';

describe('AdminAddCoursesComponent', () => {
  let component: AdminAddCoursesComponent;
  let fixture: ComponentFixture<AdminAddCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
