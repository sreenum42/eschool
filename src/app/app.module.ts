import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BannerComponent } from './components/banner/banner.component';
import { DiscoverMoreComponent } from './components/discover-more/discover-more.component';
import { PopularCoursesComponent } from './components/popular-courses/popular-courses.component';
import { HappeningsComponent } from './components/happenings/happenings.component';
import { NewsEventsComponent } from './components/news-events/news-events.component';
import { BookCourseComponent } from './components/book-course/book-course.component';
import { FooterComponent } from './footer/footer.component';
import { NguCarouselModule } from '@ngu/carousel';
import { QuickLinksComponent } from './components/quick-links/quick-links.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './teacher/courses/courses.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './admin/event/event.component';
import {AdminDashboardComponent} from './admin/admin-dashboard/admin-dashboard.component';
import {AdmissionComponent} from './user/admission/admission.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { SignupService } from './providers/signup.service';
import { EmailValidationDirective } from './components/common-directives/email-validation.directive';
import { ShowPasswordDirective } from './components/common-directives/show-password.directive';
import { AuthGuardService } from './auth-guard.service';
import {AuthService} from './providers/auth.service';
import {TeacherModule} from './teacher/teacher.module';
import { StudentComponent } from './admin/student/student.component';
import { CourseDetailComponent } from './admin/course/course-detail/course-detail.component';
import {AwardsComponent} from './awards/awards.component';
import {DashboardComponent} from './user/dashboard/dashboard.component';
import {ExamsComponent} from './user/exams/exams.component';
import {ProfileComponent} from './user/profile/profile.component';
import {TimelineComponent} from './user/timeline/timeline.component';
import {SeminarComponent} from './seminar/seminar.component';
import {AllCoursesComponent} from './all-courses/all-courses.component';
import {BlogComponent} from './blog/blog.component';
import {BlogDetailsComponent} from './blog-details/blog-details.component';
import {DepartmentsComponent} from './departments/departments.component';
import {EventDetailsComponent} from './admin/event/event-details/event-details.component';
import {EventRegisterComponent} from './admin/event/event-register/event-register.component';
import {FacilitiesComponent} from './facilities/facilities.component';
import {FacilitiesDetailComponent} from './facilities/facilities-detail/facilities-detail.component';
import {ResearchComponent} from './research/research.component';
import {PhotoGalleryComponent} from './photo-gallery/photo-gallery.component';
import {AdminAddCoursesComponent} from './admin/admin-add-courses/admin-add-courses.component';
import {AdminAllCoursesComponent} from './admin/admin-all-courses/admin-all-courses.component';
import {AdminStudentDetailsComponent} from './admin/admin-student-details/admin-student-details.component';
import {AddStudentComponent} from './admin/student/add-student/add-student.component';
import {AllStudentsComponent} from './admin/student/all-students/all-students.component';
import {AdminSettingComponent} from './admin/admin-setting/admin-setting.component';
import {EventAllComponent} from './admin/event/event-all/event-all.component';
import {EventAddComponent} from './admin/event/event-add/event-add.component';
import {AdminCourseDetailsComponent} from './admin/admin-course-details/admin-course-details.component';
import {AdminLoginComponent} from './admin/admin-login/admin-login.component';
import { EventEditComponent } from './admin/event/event-edit/event-edit.component';
import {AdminExamAddComponent} from './admin/admin-exam-add/admin-exam-add.component';
import {AdminExamAllComponent} from './admin/admin-exam-all/admin-exam-all.component';
import {AdminExamEditComponent} from './admin/admin-exam-edit/admin-exam-edit.component';
import {AdminForgotComponent} from './admin/admin-forgot/admin-forgot.component';
import {AdminSeminarAddComponent} from './admin/admin-seminar-add/admin-seminar-add.component';
import {AdminSeminarAllComponent} from './admin/admin-seminar-all/admin-seminar-all.component';
import {AdminSeminarEditComponent} from './admin/admin-seminar-edit/admin-seminar-edit.component';
import { SemisterEnquiriesComponent } from './admin/Enquiries/semister-enquiries/semister-enquiries.component';
import { EventEnquiriesComponent } from './admin/Enquiries/event-enquiries/event-enquiries.component';
import { CourseEnquiriesComponent } from './admin/Enquiries/course-enquiries/course-enquiries.component';
import { CommonEnquiriesComponent } from './admin/Enquiries/common-enquiries/common-enquiries.component';
import { AllEnquiriesViewComponent } from './admin/Enquiries/all-enquiries-view/all-enquiries-view.component';
import { AllEnquiriesComponent } from './admin/Enquiries/all-enquiries/all-enquiries.component';
import { AdmissionEnquiriesComponent } from './admin/Enquiries/admission-enquiries/admission-enquiries.component';
import { EntryComponent } from './user/entry/entry.component';
import {NotificationsComponent} from './user/notifications/notifications.component'
// step 3 create route mapping/config table
const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'event', component: EventComponent },
  { path: 'student', component: StudentComponent },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admission', component: AdmissionComponent },
  { path: 'course-detail', component: CourseDetailComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'exams', component: ExamsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'seminar', component: SeminarComponent },
  { path: 'all-courses', component: AllCoursesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-detail', component: BlogDetailsComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'event-details', component: EventDetailsComponent },
  { path: 'event-register', component: EventRegisterComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'facilities-detail', component: FacilitiesDetailComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'photo-gallery', component: PhotoGalleryComponent },
  { path: 'admin-add-courses', component: AdminAddCoursesComponent },
  {path: 'admin-all-courses', component: AdminAllCoursesComponent},
  {path: 'admin-student-details', component: AdminStudentDetailsComponent},
  {path: 'add-student', component: AddStudentComponent},
  {path: 'all-students', component: AllStudentsComponent},
  {path: 'admin-setting', component: AdminSettingComponent},
  {path: 'event-all', component: EventAllComponent},
  {path: 'event-add', component: EventAddComponent},
  {path: 'admin-course-details', component: AdminCourseDetailsComponent},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'event-edit', component: EventEditComponent},
  {path: 'admin-exam-add', component: AdminExamAddComponent},
  {path: 'admin-exam-all', component: AdminExamAllComponent},
  {path: 'admin-exam-edit', component: AdminExamEditComponent},
  {path: 'admin-forgot', component: AdminForgotComponent},
  {path: 'admin-seminar-add', component: AdminSeminarAddComponent},
  {path: 'admin-seminar-all', component: AdminSeminarAllComponent},
  {path: 'admin-seminar-edit', component: AdminSeminarEditComponent},
  {path: 'admission-enquiries', component: AdmissionEnquiriesComponent},
  {path: 'all-enquiries', component: AllEnquiriesComponent},
  {path: 'all-enquiries-view', component: AllEnquiriesViewComponent},
  {path: 'common-enquiries', component: CommonEnquiriesComponent},
  {path: 'course-enquiries', component: CourseEnquiriesComponent},
  {path: 'event-enquiries', component: EventEnquiriesComponent},
  {path: 'semister-enquiries', component: SemisterEnquiriesComponent},
  {path: 'entry', component: EntryComponent},
  {path: 'notification', component: NotificationsComponent},
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    NavigationComponent,
    AllCoursesComponent,
    AdminSettingComponent,
    AdminExamAddComponent,
    EventEditComponent,
    AdminSeminarAllComponent,
    AdminSeminarAddComponent,
    AdminSeminarEditComponent,
    BannerComponent,
    AdminLoginComponent,
    SemisterEnquiriesComponent,
    AllEnquiriesComponent,
    AdmissionEnquiriesComponent,
    AllEnquiriesViewComponent,
    EventEnquiriesComponent,
    CourseEnquiriesComponent,
    CommonEnquiriesComponent,
    AdminExamAllComponent,
    AdminForgotComponent,
    AdminExamEditComponent,
    DepartmentsComponent,
    DiscoverMoreComponent,
    PopularCoursesComponent,
    AdminStudentDetailsComponent,
    AdminCourseDetailsComponent,
    FacilitiesComponent,
    AdminAllCoursesComponent,
    SeminarComponent,
    AdminAddCoursesComponent,
    ResearchComponent,
    FacilitiesDetailComponent,
    PhotoGalleryComponent,
    AwardsComponent,
    EventDetailsComponent,
    EventRegisterComponent,
    EventAllComponent,
    EventAddComponent,
    BlogComponent,
    BlogDetailsComponent,
    CourseDetailComponent,
    HappeningsComponent,
    NewsEventsComponent,
    BookCourseComponent,
    FooterComponent,
    QuickLinksComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NotFoundComponent,
    LoginComponent,
    SignUpComponent,
    EmailValidationDirective,
    ShowPasswordDirective

  ],
  imports: [
    BrowserModule,
    NguCarouselModule,
    RouterModule.forRoot(myRoutes),
    AdminModule,
    UserModule,
    TeacherModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [SignupService, AuthGuardService, AuthService],
  exports: [
    ShowPasswordDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
