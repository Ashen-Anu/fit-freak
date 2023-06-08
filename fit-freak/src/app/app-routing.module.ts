import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddScheduleComponent } from './pages/add-schedule/add-schedule.component';
import { AddWorkoutComponent } from './pages/add-workout/add-workout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ViewWorkoutComponent } from './pages/view-workout/view-workout.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ViewReviewsComponent } from './pages/admin/view-reviews/view-reviews.component';
import { ViewUsersComponent } from './pages/admin/view-users/view-users.component';
import { AdminLoginComponent } from './pages/admin/admin-login/admin-login.component';
import { ViewRegisteredusersComponent } from './pages/admin/view-registeredusers/view-registeredusers.component';
import { WritereviewsComponent } from './pages/writereviews/writereviews.component';
import { VreviewsComponent } from './pages/vreviews/vreviews.component';


const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'addschedule',component:AddScheduleComponent},
  {path: 'addWorkout',component:AddWorkoutComponent},
  {path: 'view-workout',component:ViewWorkoutComponent},
  {path: 'about-us',component:AboutUsComponent},
  {path: 'chat',component:ChatComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'users',component:ViewUsersComponent},
  {path: 'registeredusers',component:ViewRegisteredusersComponent},
  {path: 'reviews',component:ViewReviewsComponent},
  {path: 'adminlogin',component:AdminLoginComponent},
  {path: 'writereviews', component:WritereviewsComponent},
  {path: 'vreviews', component:VreviewsComponent},
  {path: '**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
