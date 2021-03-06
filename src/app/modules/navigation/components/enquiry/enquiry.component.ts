import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../services/enquiry.service';
import { Enquiry } from '../../models/enquiry';
import { Observable } from 'rxjs';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  enquirys: Observable<Enquiry[]>;
  firstFormGroup: FormGroup;
  _formBuilder: any;

  constructor(private enquiryService: EnquiryService) { }

  ngOnInit() {
    this.reloadData();

    this.firstFormGroup = this._formBuilder.group({
      enquiryResponse: ['', Validators.required]
    });
  };

  reloadData(){
    this.enquirys=this.enquiryService.getEnquiryList();
    console.log(this.enquirys);
  }

  deleteEnquiry(id: number) {
    this.enquiryService.deleteEnquiry(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  sendResponse(id:number){
    let enquiryResponse = this.firstFormGroup.controls['enquiryResponse'].value;
    this.enquiryService.sendResponse(enquiryResponse , id ).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
  }


}
