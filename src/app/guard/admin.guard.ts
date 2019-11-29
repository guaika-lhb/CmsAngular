import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AdminGuard implements CanActivate,CanActivateChild  {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve) => {
      
      this.authservice.getRole()
        .then((role: any) => {
          if(role.role=='admin'){
            resolve(true);
          }
          else{
           this.router.navigate(["login"]);
            resolve(false);
          }
          
        })
        .catch(err => {
         this.router.navigate(["login"]);
          resolve(false);
        });
      })
  }
  
  
  
  
  //adminflag:boolean;
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    
   



  return new Promise((resolve) => {
    this.authservice.getRole()
      .then((role: any) => {
        if(role.role=='admin'){

          resolve(true);
        }
        else{
         // this.router.navigate(["login"]);
          resolve(false);
        }
        
      })
      .catch(err => {
      //  this.router.navigate(["login"]);
        resolve(false);
      });
    })
   //eturn this.adminflag;
  
  
  
  }
  constructor(private authservice:AuthService,private router:Router){
  

  }

  }