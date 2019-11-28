import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../services/enquiry.service';
import { Enquiry } from '../../models/enquiry';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  enquirys: Observable<Enquiry[]>;

  constructor(private enquiryService: EnquiryService) { }

  ngOnInit() {
    this.reloadData();
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


}
