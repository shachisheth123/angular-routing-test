import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { userRoute } from './user.route';
import { UserService } from './user.service';
import { LogoutComponent } from './logout.component';
import { WelcomeComponent } from '../welcome.component';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
    declarations: [
        RegistrationComponent,
        LoginComponent,
        LogoutComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(userRoute),
        RouterTestingModule.withRoutes(userRoute)
    ],
    exports: [
        RegistrationComponent,
        LoginComponent,
    ],
    providers:[
        UserService
    ]
})
export class UserModule {
}
