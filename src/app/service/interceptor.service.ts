import { Injectable } from "@angular/core";
import {HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
    HttpResponse, HttpUserEvent, HttpErrorResponse, HttpEvent} from '@angular/common/http';

import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import { AuthService } from "../service/auth.service";
const TOKEN_HEADER_KEY = 'Authorization';




@Injectable()
export class Interceptor implements HttpInterceptor {


  constructor(
 
    private router:Router
    ,private authservice:AuthService
){}





intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     



let token=localStorage.getItem("token");
if(token!=null&&request.url.indexOf("/public/")==-1){

  request = request.clone({
    setHeaders: {
      // This is where you can use your various tokens
      // Authorization: `JWT ${jwttoken}`,
      // 'X-CSRFToken': `${csrftoken}`
      "Authorization":token
    }
  });
}


return next.handle(request).do((event: HttpEvent<any>) => {
  if (event instanceof HttpResponse) {

      if(token!=null&&event.url.indexOf('/public/')==-1){
    if(event.url.indexOf("/auth/refreshToken")==-1){

         this.authservice.refreshToken();
    
        }
      }
  }
}, (err: any) => {
 
  if (err instanceof HttpErrorResponse) {
   
    if (err.status === 401 || err.status === 403) {
      console.log("handle error here")
        localStorage.clear();
      this.router.navigate(['']);

    }
  
  }
  
}
,()=>{

  
}
);

}










}