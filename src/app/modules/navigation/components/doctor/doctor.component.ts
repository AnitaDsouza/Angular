import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctors: Observable<Doctor[]>;

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.reloadData();
  };

  reloadData(){
    this.doctors=this.doctorService.getDoctorList();
    console.log(this.doctors);
  }

  deleteDoctor(doctor_id: number) {
    this.doctorService.deleteDoctor(doctor_id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


}
