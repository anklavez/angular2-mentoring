import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { HomeComponent } from './home/index';
import { RegisterComponent } from './register/index';
import { AuthenticationService } from "./shared/auth/auth.service";
import { LoginComponent } from "./login/login.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    providers: [
        AuthenticationService,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }