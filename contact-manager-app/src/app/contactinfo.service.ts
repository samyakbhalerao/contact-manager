import { Injectable } from '@angular/core';
import { EmployeeContactData } from './model/employee.contact'
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable , BehaviorSubject} from "rxjs";
import { map } from 'rxjs/operators';

//All URL's for server
const endpoints = {
  contactList: "http://localhost:3000/api/v1/contactlist",
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
  contactListObserver: Observable<string>;
  updateListSrc : BehaviorSubject<string>;
  
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({ headers: this.headers });
    this.updateListSrc = new BehaviorSubject('UpdateOperation');
    this.contactListObserver = this.updateListSrc.asObservable();
  }
  updateCompleted(msg : any){
    this.updateListSrc.next(msg);
  }
  getContactInfo(): Observable<EmployeeContactData[]> {
    return this.http.get(endpoints.contactList, this.options).pipe(
      map((res: Response) => res.json()),
    );

  }
  //update contact
  updateContactInfo(contactData: EmployeeContactData): Observable<any> {
    return this.http.put(endpoints.contact, contactData).pipe(
      map((res: Response) => res.json()),
    );

  }

  //Add new contact
  addContact(contactData: EmployeeContactData): Observable<any> {
    console.log(contactData);
    return this.http.post(endpoints.contact, contactData, this.options).pipe(
      map((res: Response) => res.json()),
    );
  }
  //setContactInfo
  setContactInfo(contactData: EmployeeContactData[]) {
    this.contactInfo = contactData;
  }
  //remove record
  deleteContact(id: string): Observable<any> {
    console.log("id",id);
    return this.http.delete(endpoints.contact+`/${id}`,this.options);

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
