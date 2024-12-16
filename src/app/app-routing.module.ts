import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { PerformanceComponent } from './performance/performance.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { FeesComponent } from './fees/fees.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path:'dashboard/:userId',component:DashboardComponent},
  { path: 'courses/:userId', component: CoursesComponent },
  { path: 'assignments/:userId', component: AssignmentsComponent },
  { path: 'performance/:userId', component: PerformanceComponent },
  { path: 'profile/:userId', component: ProfileComponent },
  { path: 'chat/:userId', component: ChatComponent },
  {path:'attendance/:userId',component:AttendanceComponent},
  {path:'fees/:userId',component:FeesComponent}

  // { path: 'student-details/:userId', component: StudentDetailsComponent },
  // { path: 'course-details/:courseId', component: CourseDetailsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
