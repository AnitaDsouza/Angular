import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { login } from '../../model/login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginGroup: FormGroup;

  logins: Observable<login[]>;

  constructor(private _formBuilder: FormBuilder 
    , private loginService : LoginService, private router: Router ) {}

     
  ngOnInit() { 
    this.loginGroup = this._formBuilder.group({
      email: ['', Validators.required],
      password:['', Validators.required]
    });
    
  }

  login(){
    
    let email = this.loginGroup.controls['email'].value;
    let password = this.loginGroup.controls['password'].value;
    let loginuser = new login(email , password);
 
 this.loginService.loginValidation(loginuser).subscribe(data => 
  {
    if(data){
      console.log("da " + data)
      this.router.navigate(['/home']);
    }else
    {
      this.router.navigate(['/login']);
    }
  });

  }
 
       
  }

