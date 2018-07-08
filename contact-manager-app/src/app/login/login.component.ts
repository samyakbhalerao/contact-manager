import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = "admin";
  password = "admin";
  loginStatus ;
  hide;
 
  constructor() { 
    this.hide=true;
  }

  ngOnInit() {
  }

  authenticate(loginData ){
    console.log(loginData);
      if(this.userName.match(loginData.userName) && this.password.match(loginData.password)){
        this.loginStatus = "Success";
      }else{
        this.loginStatus = "Failed !!";        
      }

  }
  getErrorMessage(){
    return "Incorrect EmailId";
  }

}
