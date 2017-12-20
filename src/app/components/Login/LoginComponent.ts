import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'LoginSelector',
    templateUrl: `./LoginComponent.html`,
    styleUrls: [`./LoginComponent.css`]
})

export class LoginComponent {

    constructor(private router: Router) { }
    LoginForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    });

    onSubmitLoginForm() {

        var obj: object;
        obj = this.LoginForm.value;
        if (obj.username == "admin" && obj.password == "admin") {
            this.router.navigate(['dashboard']);
            alert("Login successful");

        }
        else {
            document.getElementById('message').innerHTML = "Please enter valid Username or password";
        }
        console.log(this.LoginForm.value);
    }

}