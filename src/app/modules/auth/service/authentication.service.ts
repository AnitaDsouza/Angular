import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private loginService : LoginService, private router: Router) { }

     

  authenticate(email , password) {
    let loginuser = new login(email , password);
 
    this.loginService.loginValidation(loginuser).subscribe(data => 
     {
       if(data){
        sessionStorage.setItem('username', email)
         this.router.navigate(['/home']);
       }else
       {
         this.router.navigate(['/login']);
       }
     });
   
     }

     getLoggedDetails(){
      return sessionStorage.getItem('username');
     }

     logOut() {
      sessionStorage.removeItem('username')
    }
  
  }
