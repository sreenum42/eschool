import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent} from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CoursesComponent } from './courses/courses.component';
import { ExamsComponent } from './exams/exams.component';
import { TimelineComponent } from './timeline/timeline.component';
import { EntryComponent } from './entry/entry.component';
import {AdmissionComponent} from './admission/admission.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RouterModule, Routes } from "@angular/router";

const userRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'course', component: CoursesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'exam', component: ExamsComponent },
      { path: 'timeline', component: TimelineComponent },
      { path: 'notification', component: NotificationsComponent },
      { path: 'entry', component: EntryComponent },
    ]
  }
]
@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [UserComponent, DashboardComponent, ProfileComponent, AdmissionComponent, CoursesComponent, ExamsComponent, TimelineComponent, EntryComponent, NotificationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UserModule { }
