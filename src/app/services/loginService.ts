import { Injectable } from '@angular/core';

@Injectable()

export class loginService {

    validateCredentials(loginForm: any) {
        if (loginForm.username === 'admin' && loginForm.password === "admin")
            return true;
        else
            return false;
    }
}