import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private listId = 'CONTACT_COMPONENT_LIST';
  private editId = 'CONTACT_COMPONENT_EDIT';
  constructor(private http:Http) { }

  ngOnInit() {
  }

 

}
