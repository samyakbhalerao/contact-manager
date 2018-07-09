import { Component , OnInit} from '@angular/core';
import {AuthenticationService} from './authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title : string = 'Contact Manager';
  loginStatus : boolean;
  constructor(private authService:AuthenticationService){}
  ngOnInit() {
    this.authService.authStatus.subscribe((data)=>{
      console.log(data);
      this.loginStatus = data;
    });
  }
  logout(){
    this.authService.logout();
}
}
