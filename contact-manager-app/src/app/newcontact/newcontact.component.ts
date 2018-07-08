import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';
import { ContactinfoService } from '../contactinfo.service';



@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.css']
})

export class NewcontactComponent implements OnInit {
  contactDetailsForm;
  constructor(private contactInfoService: ContactinfoService) { 
    this.contactDetailsForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      contactNo: new FormControl(),
      email: new FormControl(),
      department: new FormControl(),
      status: new FormControl()
   });
  }

  ngOnInit() {
  }

  addContact(newContact) {
    this.contactInfoService.addContact(newContact);
    console.log(newContact);
  }
}
