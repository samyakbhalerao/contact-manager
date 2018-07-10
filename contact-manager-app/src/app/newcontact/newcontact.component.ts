import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators, PatternValidator } from '@angular/forms';
import { ContactinfoService } from '../contactinfo.service';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.css']
})

export class NewcontactComponent implements OnInit {
  contactDetailsForm;
  loading : boolean;
  constructor(private contactInfoService: ContactinfoService,public snackBar: MatSnackBar) { 
    this.contactDetailsForm = new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.minLength(1)]),
      lastName: new FormControl('',[Validators.required,Validators.minLength(1)]),
      contactNo: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')]),
      email: new FormControl('',[Validators.required]),
      department: new FormControl('',[Validators.required]),
      status: new FormControl('',[Validators.required])

   });
   this.loading = false;
  }

  ngOnInit() {
  }

  addContact(newContact) {
    console.log(this.contactDetailsForm);
    this.contactDetailsForm.disable();
    this.loading =true;
    this.contactInfoService.addContact(newContact).subscribe((res) => {
         this.contactDetailsForm.reset();
         this.loading=false;
         this.contactDetailsForm.enable()
         this.openSnackBar("New Contact Added","OK");  
         console.log(res);
    });
   
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
