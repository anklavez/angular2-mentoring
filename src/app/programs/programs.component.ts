import { Component, ElementRef } from '@angular/core';
import { AuthenticationService } from "../shared/auth/auth.service";

@Component({
selector : 'programs-form',
providers: [AuthenticationService],
templateUrl : './programs.component.html'
})

export class ProgramsComponent{

    constructor
    (
        private service : AuthenticationService
    ){}

    ngOnInit() {
        this.service.checkCredentials();
    }

    logout() {
        this.service.logout();
    }
}