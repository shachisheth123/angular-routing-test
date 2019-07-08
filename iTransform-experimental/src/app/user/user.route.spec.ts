import { Router } from "@angular/router";
import { TestBed, fakeAsync ,tick} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout.component';
import { appRoute } from '../app.route';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from '../welcome.component';

describe('Router: User', () => {

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
          
            RegistrationComponent,
            LoginComponent,
            LogoutComponent,
            WelcomeComponent
        ],
        providers: [
            Location
        ]
      });
  
      router = TestBed.get(Router); 
      location = TestBed.get(Location); 
  
      fixture = TestBed.createComponent(LoginComponent); 
      router.initialNavigation(); 
    });
    
    it('should be able to navigate to "signup" to registration page', fakeAsync(() => {
      router.navigate(['signup']);
      tick();
      expect(location.pathname).toBe('/signup');
  }));  
    
  });