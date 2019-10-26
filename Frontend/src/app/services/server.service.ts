import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()

export class ServerService
{   
     
    private rootUrl="https://a56d5cfc.ngrok.io"
    constructor(private http :HttpClient){}
    signup(yourName:string,phoneNumber:number,email:string,password:string,confirmPassword:string) 
    {  
        const headers = new HttpHeaders({'Content-Type':'application/json'});
        console.log(JSON.stringify({yourName,email,password,confirmPassword,phoneNumber}));
        return  this.http.post(this.rootUrl+'/api/account',JSON.stringify({yourName,email,password,confirmPassword,phoneNumber}),
        {headers:headers});
    }

    login(email:string ,password:string)
  { 
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    console.log(JSON.stringify({email,password}));
    return  this.http.post(this.rootUrl+'/api/account/userlogin',JSON.stringify({email,password}),
    {headers:headers});
  }
}