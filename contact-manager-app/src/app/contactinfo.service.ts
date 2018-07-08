import { Injectable } from '@angular/core';
import { EmployeeContactData } from './model/employee.contact'
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { EmitterService } from './emitter.service';
//All URL's for server
const endpoints = {
  contactList: "http://localhost:3000/api/v1/contactlist",
  login: "http://localhost:3000/api/v1/auth",
  contact: "http://localhost:3000/api/v1/contact"
};

@Injectable({
  providedIn: 'root'
})
export class ContactinfoService {
  contactInfo: EmployeeContactData[];
  headers: Headers;
  options: RequestOptions;
  contactDataList: EmployeeContactData[];
  contactListObserver: Observable<EmployeeContactData[]>;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({ headers: this.headers });

  }

  getContactInfo(): Observable<EmployeeContactData[]> {
    return this.http.get(endpoints.contactList, this.options).pipe(
      map((res: Response) => res.json()),
    );

  }
  //update contact
  updateContactInfo(contactData: EmployeeContactData): void {
    this.http.put(endpoints.contact, contactData).subscribe((res) => {
      console.log(res);
      //this.contactInfo.push(contactData);
      console.log(EmitterService.get("CONTACT_COMPONENT_LIST"));
       EmitterService.get("CONTACT_COMPONENT_LIST").emit();
    });

  }

  //Add new contact
  addContact(contactData: EmployeeContactData): void {
    console.log(contactData);
    this.http.post(endpoints.contact, contactData, this.options).subscribe((res) => {

      if (res.status == 200) {
        // this.contactInfo.push(res.json());
      }
    });
  }
  //setContactInfo
  setContactInfo(contactData: EmployeeContactData[]) {
    this.contactInfo = contactData;
  }
  //Get Contact by id
  getContactById(id: string): EmployeeContactData {
    let foundContact: EmployeeContactData;
    console.log(id);
    this.contactInfo.map((contactItem) => {

      if (contactItem['_id']['$oid'] == id) {
        console.log(contactItem);
        foundContact = contactItem;
      }
    });
    return foundContact;
  }
}
