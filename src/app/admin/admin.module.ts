import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {CourseComponent} from './course/course.component';
import {StudentComponent} from './student/student.component';
import {TrainerComponent} from './trainer/trainer.component';

import {EventComponent} from './event/event.component';

import {RouterModule, Routes} from '@angular/router';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {CreateNewPageComponent} from './pages/create-new-page/create-new-page.component';
import {AllPagesComponent} from './pages/all-pages/all-pages.component';
import {AddStudentComponent} from './student/add-student/add-student.component';
import {FormsModule} from '@angular/forms';
import {AllStudentsComponent} from './student/all-students/all-students.component';
import {AddstudentService} from '../providers/addstudent.service';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import {AppModule} from '../app.module';
import { AdminSearchPipe } from './admin-search.pipe';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: '', component: AdminDashboardComponent},
      {path: 'course', component: CourseComponent},
      {path: 'student', component: StudentComponent},
      {path: 'trainer', component: TrainerComponent},
      {path: 'event', component: EventComponent},
      {path: 'allpages', component: AllPagesComponent},
      {path: 'createpage', component: CreateNewPageComponent},
      {path: 'student/all-students', component: AllStudentsComponent},
      {path: 'student/add-student', component: AddStudentComponent},
      {path: 'student/add-student/:id', component: AddStudentComponent},
      {path: 'teacher/all-teacher', component: ListTeacherComponent},
      {path: 'teacher/add-teacher', component: AddTeacherComponent},
      {path: 'teacher/edit-teacher/:id', component: AddTeacherComponent}

    ]
  }
];

@NgModule({
  declarations: [AdminComponent, CourseComponent, AddStudentComponent, AllStudentsComponent,
    // tslint:disable-next-line:max-line-length
    StudentComponent, TrainerComponent, EventComponent, AdminDashboardComponent, CreateNewPageComponent, AllPagesComponent, AddTeacherComponent, ListTeacherComponent, AdminSearchPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule,

  ],
  providers: [AddstudentService]
})
export class AdminModule {

  constructor() {
    // debugger;
    console.log('[AdminModule]');
  }
}
