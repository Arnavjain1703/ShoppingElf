import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/Forms';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ServerService } from './services/server.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
