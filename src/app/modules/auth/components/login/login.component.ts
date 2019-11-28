import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validate : boolean;
  loginGroup: FormGroup;

  
  constructor(private _formBuilder: FormBuilder 
    , private authenticationService : AuthenticationService, private router: Router ) {}

     
  ngOnInit() { 
    this.loginGroup = this._formBuilder.group({
      email: ['', Validators.required],
      password:['', Validators.required]
    });
    
  }



  login(){    
    let email = this.loginGroup.controls['email'].value;
    let password = this.loginGroup.controls['password'].value;
    this.authenticationService.authenticate(email , password);
  }
       
  }

