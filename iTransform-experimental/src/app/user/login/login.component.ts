import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User, Authenticate } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user: User;
    auth: Authenticate;

    constructor(private fb: FormBuilder, private userService: UserService,
                private router: Router) {
            this.auth = new Authenticate();
        }
        // @Output() loggedIn = new EventEmitter<User>();

        loginForm: FormGroup;
        ngOnInit() {

            console.log(this.user)
            this.loginForm = this.fb.group({
                userName : ['', Validators.required],
                password : ['', [ Validators.required, Validators.pattern('^(?=.*[0-9]).{8}$')]]
            });
        }
        
    onSubmit() {
        this.userService.getUserAuthentication(this.loginForm.value.userName, this.loginForm.value.password).subscribe((data) => {
            this.user = data;
            console.log(data);
            if (this.user != null) {
                    sessionStorage.setItem("user", JSON.stringify(this.user));
                    this.router.navigate(['/courses']);
                    window.location.href = '/courses';
            } else {
                alert('please enter correct userName and password');
                this.router.navigate(['/login']);
            }

        });


    }

    get userName() { return this.loginForm.get("userName"); }
    get password() { return this.loginForm.get("password"); }

}
