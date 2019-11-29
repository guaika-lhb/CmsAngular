import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../model/loginform';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginform:LoginForm;


  constructor(private authservice:AuthService,
    private router:Router) { 
   this.loginform=new LoginForm();


  }

  ngOnInit() {
  }


  login(){


    this.authservice.login(this.loginform)
    .then((data:any)=>{

   console.dir(data);
    if(data.msg=='error'){
      alert('你的用户名或密码错误,请重新输入');
    }
    else if(data.msg=='ok'){
    
      this.router.navigate(['index']);

      localStorage.setItem('token',data.token);



    }
    else{

    alert("通讯异常，请刷新后重试!");

    }






    })





  }


  reset(){
    this.loginform=new LoginForm();


  }



}