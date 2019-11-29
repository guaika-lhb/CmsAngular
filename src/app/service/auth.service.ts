import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { LoginForm } from '../model/loginform';

@Injectable()
export class AuthService {


  constructor(private http:HttpClient
    ,private config:ConfigService) { }


   private loginUrl=this.config.host+"/public/login";

   login(loginform:LoginForm){

   return this.http.post(this.loginUrl,loginform).toPromise();


   }


   private refreshTokenUrl=this.config.host+"/auth/refreshToken";

   refreshToken(){
 
     this.http.get(this.refreshTokenUrl).toPromise()
       .then((data:any)=>{
         if(data.token!='error'){
           localStorage.setItem("token",data.token);
         }
         else{
           data = {
             reason: '无权限访问',
             status: 401
           };
 
         }
 
 
       })
 
   }



   private getRoleUrl=this.config.host+"/auth/getRole";

  getRole(){

    return this.http.get(this.getRoleUrl).toPromise();
  }
 
 



}