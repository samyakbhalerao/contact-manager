import { Component, OnInit, Inject} from '@angular/core';
import { ContactinfoService } from '../contactinfo.service';
import { FormControl, FormGroup } from '@angular/forms';
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
 
  constructor(private contactInfoService: ContactinfoService, public dialogRef: MatDialogRef<EditContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EmployeeContactData) {
    this.contactDetailsForm = new FormGroup({
      firstName: new FormControl(data.firstName),
      lastName: new FormControl(data.lastName),
      contactNo: new FormControl(data.contactNo),
      email: new FormControl(data.email),
      //   department: new FormControl(),
      status: new FormControl(data.status)
    });
    this.prevContactData = data;
  }

  ngOnInit() {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  //save edited data
  saveEditedContact(contact: EmployeeContactData): void {
    console.log("Edited Contact:", contact);
    if (this.compareContactDetails(contact)) {
      contact._id = this.prevContactData._id;
      this.contactInfoService.updateContactInfo(contact).subscribe(
        data => {
          console.log("Update success:", data);
          this.contactInfoService.updateCompleted(data);
         
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
