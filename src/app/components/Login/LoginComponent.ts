import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { loginService } from '../../services/loginService';

@Component({
    selector: 'LoginSelector',
    templateUrl: `./LoginComponent.html`,
    styleUrls: [`./LoginComponent.css`],
    providers: [loginService]
})

export class LoginComponent {

    constructor(private router: Router, private loginService: loginService) { }
    LoginForm = new FormGroup({
        username: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required])
    });

    onSubmitLoginForm() {

        console.log(this.LoginForm.value);

        if (this.loginService.validateCredentials(this.LoginForm.value)) {
            this.router.navigate(['dashboard']);
            alert("Login successful");
        } else {
            document.getElementById('message').innerHTML = "Please enter valid Username or password";
        }
    }

}