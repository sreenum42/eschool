import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeacherComponent} from './teacher.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {CoursesComponent} from './courses/courses.component';
import {ExamsComponent} from './exams/exams.component';
import {TimelineComponent} from './timeline/timeline.component';
import {EntryComponent} from './entry/entry.component';
import {NotificationComponent} from './notification/notification.component';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from '../footer/footer.component';


const userRoutes: Routes = [
  {
    path: 'teacher',
    component: TeacherComponent,
    children: [
      {path: '', component: DashboardComponent},

      {path: 'course', component: CoursesComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'exam', component: ExamsComponent},
      {path: 'timeline', component: TimelineComponent},
      {path: 'notification', component: NotificationComponent},
      {path: 'entry', component: EntryComponent},
    ]
  }
];

@NgModule({
  declarations: [TeacherComponent,
    DashboardComponent, ProfileComponent,
    CoursesComponent, ExamsComponent, TimelineComponent,
    EntryComponent, NotificationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)

  ]
})
export class TeacherModule {
}
