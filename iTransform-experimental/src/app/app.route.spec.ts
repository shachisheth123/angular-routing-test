import { Router } from "@angular/router";
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WelcomeComponent } from './welcome.component';
import { AppComponent } from './app.component';
import { appRoute } from './app.route';
import { LoginComponent } from './user/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('Router: RegistrationComponent', () => {

    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:
                [
                    BrowserModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientTestingModule,
                    HttpClientModule,
                    RouterTestingModule.withRoutes(appRoute)
                ],
            declarations: [

                AppComponent,
                WelcomeComponent,
                LoginComponent
            ],
            providers: [
                Location
            ]
        });

        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    });

    // it('should be able to navigate to "login" to', fakeAsync(() => {
    //     router.navigate(['login']);
    //     tick();
    //     expect(location.path()).toBe('/login');
    // }))

    
});