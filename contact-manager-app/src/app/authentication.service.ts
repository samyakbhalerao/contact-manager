import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable , BehaviorSubject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  updateAuthStatus : BehaviorSubject<boolean>;
  authStatus : Observable<boolean>;
  constructor(private http:Http,private router: Router) {
    this.updateAuthStatus = new BehaviorSubject(false);
    this.authStatus = this.updateAuthStatus.asObservable();
   
  }

  changeAuthStatus(authFlag : boolean){
    this.updateAuthStatus.next(authFlag);
  }

  login(username: string, password: string){
    return this.http.post('/api/v1/auth', { username: username, password: password }).
    pipe(
      map((res: Response) => res.json()),
    );
  }

  logout(){
    this.changeAuthStatus(false);
    localStorage.removeItem('currentUser');
    this.router.navigate(["/login"]);

  }
}
