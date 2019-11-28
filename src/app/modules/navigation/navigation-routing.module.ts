import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { AdddoctorComponent } from './components/adddoctor/adddoctor.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AdminListComponent } from './dummy/admin-list/admin-list.component';
import { AdminCreateComponent } from './dummy/admin-create/admin-create.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SpecialistComponent } from './components/specialist/specialist.component';


const routes: Routes = [
  {path:'' , component:NavComponent,
  children: [

  {path:'doctor' , component:DoctorComponent},
  {path:'addDoctor' , component:AdddoctorComponent},
  {path:'appointment' , component:AppointmentComponent},
  { path:'admins', component: AdminListComponent },
  { path:'addAdmin', component: AdminCreateComponent },
  {path:'enquiry' , component:EnquiryComponent},
  {path:'feedback' , component:FeedbackComponent},
  {path:'logout' , component:LogoutComponent},
  {path:'speciality' , component:SpecialistComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
