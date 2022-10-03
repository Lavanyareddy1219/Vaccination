import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userreg } from './userreg';

const htttOptions={
  headers : new  HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserregService {
  constructor(private http: HttpClient) { }

Userreg(userUsername: string,userPassword:string,userEmail :string,userMobile:string,userGender:string,userState:string): Observable<any>{
  return this.http.post('http://localhost:8080/userregistrations/add',{
    userUsername,
    userPassword,
    userEmail,
    userMobile,
    userGender,
    userState
  },htttOptions)
}
 

}