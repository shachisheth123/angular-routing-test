import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoute } from './app.route';
import { WelcomeComponent } from './welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseModule } from './course/course.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { CommonModule } from '@angular/common';
import { WelcomeCourseModule } from './welcome-page/welcome-course.module';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    CourseModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
   // RouterTestingModule.withRoutes(appRoute),
    UserModule,
    RouterModule.forRoot(appRoute),
    ReactiveFormsModule,
    WelcomeCourseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
