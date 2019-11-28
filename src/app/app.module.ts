import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { AuthService } from './modules/auth/service/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [AuthService ,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
