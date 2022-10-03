import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{Dose} from './dose';


const htttOptions={
  headers : new  HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class DoseService {

  constructor(private http: HttpClient) { }

  Dose(userRegistrationId:string,uservaccinationType:string,userFirstDose:boolean,userSecondDose:boolean,userAEFIpostFirstdosedescription:string,userAEFIpostFirstdose:boolean):Observable<any>{
    return this.http.post('http://localhost:8080/userdoses/add',{
      userRegistrationId,
      uservaccinationType,
    userFirstDose,
    userSecondDose,
    userAEFIpostFirstdosedescription,
    userAEFIpostFirstdose
  },htttOptions)
}
}
