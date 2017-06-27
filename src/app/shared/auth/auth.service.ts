import {Injectable} from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../user/user.model";

// Hardcoded user
var users = [
    new User("admin","admin")
];

@Injectable()
export class AuthenticationService{

     constructor(
        private router: Router
    ) {}

    logout() {
        localStorage.removeItem("user");
        this.router.navigate(['Login']);
    }

    login(user){
        var authenticatedUser = users.find(u => u.name === user.name);
        if(authenticatedUser){
            localStorage.setItem("user",JSON.stringify(authenticatedUser));
            this.router.navigate(['Programm']);
            return true;
        }
        return false;
    }

    checkCredentials(){
        if(localStorage.getItem("user")===null){
            this.router.navigate(['Login']);
        }
    }

}