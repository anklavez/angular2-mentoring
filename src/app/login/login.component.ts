import { Component, ElementRef} from '@angular/core';
import { AuthenticationService } from '../shared/auth/auth.service';
import { User } from "../shared/user/user.model";

@Component({
selector : 'login-form',
providers : [AuthenticationService],
templateUrl : './login.component.html'
})

export class LoginComponent{

    public user = new User('','');
    public errorMsg = '';

    constructor(
        private service : AuthenticationService
        ){}

    login() {
        if(!this.service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }

}
