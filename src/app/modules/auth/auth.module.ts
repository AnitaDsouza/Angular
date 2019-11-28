import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../material.module'
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavigationModule } from '../navigation/navigation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, LandingComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NavigationModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule     
  ],
  providers: [
    
]
})
export class AuthModule { }
