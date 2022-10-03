import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const htttOptions={
  headers : new  HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) { }
  
// Login(userEmail: string,userPassword:string): Observable<any>{
//   return this.http.post('http://localhost:8080/userregistrations/add',{
//     userEmail,
//     userPassword
    
//   },htttOptions)
// }

// return this.http.post('http://localhost:8080/userregistrations/login/{userEmail},{userPassword}?userEmail='+userEmail+'&userPassword='+userPassword,{

Login(userEmail: string,userPassword:string): Observable<any>{
  return this.http.post('http://localhost:8080/userregistrations/login/{userEmail},{userPassword}?userEmail='+userEmail+'&userPassword='+userPassword,{
    userEmail,
    userPassword
    
    
  },htttOptions)
}
// let resp_1 = this.http.get("http://localhost:8080/userdoses/userstatistics");
// resp_1.subscribe((data) => this.userstatistics = data);
// resp_1.subscribe((data) => console.log(data));


}
