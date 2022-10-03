import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const htttOptions={
  headers : new  HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class FaqService {
  constructor(private http: HttpClient) { }

  Faq(question:string,answer:string):Observable<any>{
    return this.http.post('http://localhost:8080/question/add',{
      question,
      answer
  },htttOptions)
}
}
