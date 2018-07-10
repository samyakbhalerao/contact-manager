import { Component, OnInit, Inject} from '@angular/core';
import { ContactinfoService } from '../contactinfo.service';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
import { MatFormFieldControl, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeContactData } from '../model/employee.contact';

@Component({
  selector: 'app-edit-contact-dialog',
  templateUrl: './edit-contact-dialog.component.html',
  styleUrls: ['./edit-contact-dialog.component.css'],
  providers: [{ provide: MatFormFieldControl, useExisting: EditContactDialogComponent }],
})
export class EditContactDialogComponent implements OnInit {
  contactDetailsForm: FormGroup;
  prevContactData: EmployeeContactData;
  updateCompleted:boolean;
  loading : boolean;
  constructor(private contactInfoService: ContactinfoService, public dialogRef: MatDialogRef<EditContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EmployeeContactData) {
    this.contactDetailsForm = new FormGroup({
      firstName: new FormControl(data.firstName,[Validators.required,Validators.minLength(1)]),
      lastName: new FormControl(data.lastName,[Validators.required,Validators.minLength(1)]),
      contactNo: new FormControl(data.contactNo,[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')]),
      email: new FormControl(data.email,[Validators.required]),
      //department: new FormControl('',[Validators.required]),
      status: new FormControl(data.status,[Validators.required])
   });
    
    this.prevContactData = data;
    this.loading = false;
  }

  ngOnInit() {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  //save edited data
  saveEditedContact(contact: EmployeeContactData): void {
    console.log("Edited Contact:", contact);
    this.loading = true;

    if (this.compareContactDetails(contact)) {
      contact._id = this.prevContactData._id;
      this.contactDetailsForm.disable();
      this.contactInfoService.updateContactInfo(contact).subscribe(
        data => {
          console.log("Update success:", data);
          this.contactInfoService.updateCompleted(data);
          this.loading = false;
          this.contactDetailsForm.enable();
        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });;
    
    }
    console.log("Record edited:" + this.compareContactDetails(contact));

  }
  //Check id object being edited
  compareContactDetails(newContactData: EmployeeContactData): boolean {
    let editFlag: boolean = false;
    for (var key in this.prevContactData) {
      var result = "";
      if (this.prevContactData.hasOwnProperty(key) && key != '_id') {
        if (this.prevContactData[key] != newContactData[key]) {
          editFlag = true;
        }
      }
    }
    return editFlag;
  }

}
