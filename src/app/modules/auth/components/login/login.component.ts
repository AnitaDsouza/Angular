import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { login } from '../../model/login';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validate : boolean;
  loginGroup: FormGroup;
  invalidLogin: boolean;

  
  constructor(private _formBuilder: FormBuilder 
    , private loginService : LoginService, private router: Router  , private auth : AuthService) {}

     
  ngOnInit() { 
    this.loginGroup = this._formBuilder.group({
      email: ['', Validators.required],
      password:['', Validators.required]
    });
    
  }



  login()
  {    
    let email = this.loginGroup.controls['email'].value;
    let password = this.loginGroup.controls['password'].value;
    
    let loginuser = new login(email , password);
    console.log(loginuser);
    this.loginService.loginValidation(loginuser).subscribe(data => {

        if(data){
          this.auth.sendToken(email);
          this.router.navigate(["home"]);
        }

     });
    
     }

  }
       
  

