import { Component, OnInit, ViewChild, OnChanges, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { ContactinfoService } from '../contactinfo.service';
import { EmitterService } from '../emitter.service';
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
  public contactInfo$: Observable<any>;
  contactInfo: EmployeeContactData[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() listId: string;
 
  constructor(private contactInfoService: ContactinfoService, public dialog: MatDialog) {
    this.contactInfo$ = this.contactInfoService.getContactInfo();
    this.listId = "CONTACT_COMPONENT_LIST";

  }

  ngOnInit() {
    this.getContactInfo();
    setInterval(()=>{
      console.log("interval");
      EmitterService.get(this.listId).emit();
    },10000);
  }
  ngOnChanges(changes: any) {
    // Listen to the 'list'emitted event so as populate the model
    // with the event payload
    console.log("onchange");
    EmitterService.get(this.listId).subscribe(() => {
      console.log("update conrtact list");
      this.getContactInfo();
    });
  }
  getContactInfo(): void {
    this.contactInfoService.getContactInfo()
      .subscribe(
        data => {
          this.contactInfo = data;
          console.log(data);
          this.dataSource = new MatTableDataSource(this.contactInfo);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.contactInfoService.setContactInfo(this.contactInfo);
        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });

    // return this.contactInfo;
  }

  removeContact(id): void {
    console.log(id)
  }

  updateContact(id): void {
    console.log("update:", id);
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
