import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';


  
const appRoutes: Routes=[
    {path:'',redirectTo: 'frontpage', pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'frontpage',component:HomePageComponent},


]
 

@NgModule(
    {
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
    }
    )
    
    export class AppRoutingModule
    {
    
    }
     