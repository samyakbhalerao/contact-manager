import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import { MatFormFieldControl } from '@angular/material';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [{ provide: MatFormFieldControl, useExisting: LoginComponent }],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  returnUrl: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService:AuthenticationService) { 
      this.loginForm = new FormGroup({
        username: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required]),
      });
  //  this.hide=true;
  }

  ngOnInit() {
    this.authService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  authenticate(loginData ){
    console.log(loginData);
    this.loading = true;
    this.authService.login(loginData.username,loginData.password).subscribe(
      data => {
        console.log(data);
        if (data && data["token"]) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(data));
        }
        this.authService.changeAuthStatus(true);
        this.router.navigate([this.returnUrl]);
    },
    error => {
       // this.alertService.error(error);
       console.log(error); 
       this.loading = false;
    }
    );
  }

  getErrorMessage(){
    return "Incorrect EmailId";
  }

}
