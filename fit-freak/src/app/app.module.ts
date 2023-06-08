import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationbarComponent } from './essentials/navigationbar/navigationbar.component';
import { FooterComponent } from './essentials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AddScheduleComponent } from './pages/add-schedule/add-schedule.component';
import { AddWorkoutComponent } from './pages/add-workout/add-workout.component';
import { ViewWorkoutComponent } from './pages/view-workout/view-workout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ViewUsersComponent } from './pages/admin/view-users/view-users.component';
import { ViewRegisteredusersComponent } from './pages/admin/view-registeredusers/view-registeredusers.component';
import { ViewReviewsComponent } from './pages/admin/view-reviews/view-reviews.component';
import { AdminLoginComponent } from './pages/admin/admin-login/admin-login.component';
import { WritereviewsComponent } from './pages/writereviews/writereviews.component';
import { VreviewsComponent } from './pages/vreviews/vreviews.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    FooterComponent,
    HomeComponent,
    AddScheduleComponent,
    AddWorkoutComponent,
    ViewWorkoutComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    ChatComponent,
    AdminComponent,
    ViewUsersComponent,
    ViewRegisteredusersComponent,
    ViewReviewsComponent,
    AdminLoginComponent,
    WritereviewsComponent,
    VreviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
