import { Component, OnInit, ViewChild, OnChanges} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { ContactinfoService } from '../contactinfo.service';
import { EmployeeContactData } from '../model/employee.contact';
import { EditContactDialogComponent } from '../edit-contact-dialog/edit-contact-dialog.component';

import { Observable } from "rxjs";
@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})

export class ContactViewComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['id', 'Name', 'Email', 'Contact No', 'Status', 'Action'];
  dataSource: MatTableDataSource<EmployeeContactData>;
  contactInfo: EmployeeContactData[];
  loading : boolean; 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private contactInfoService: ContactinfoService, public dialog: MatDialog) {
   this.loading = false;
   }

  ngOnInit() {
    this.contactInfoService.contactListObserver.subscribe(data => {
      this.getContactInfo();
    })   
  }
  ngOnChanges(changes: any) {

  }
  getContactInfo(): void {
    this.loading = true;
    this.contactInfoService.getContactInfo()
      .subscribe(
        data => {
          this.contactInfo = data;
          console.log(data);
          this.dataSource = new MatTableDataSource(this.contactInfo);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.contactInfoService.setContactInfo(this.contactInfo);
          this.loading = false;
        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });

    // return this.contactInfo;
  }

  removeContact(id): void {
    
   this.contactInfoService.deleteContact(id).subscribe(
      data => {       
        this.getContactInfo();
      }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  updateContact(id): void {
    this.openDialog(id);
  }

  openDialog(id): void {
    const dialogRef = this.dialog.open(EditContactDialogComponent, {
      width: '700px',
      height: '300px',
      data: this.contactInfoService.getContactById(id)
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });


  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
