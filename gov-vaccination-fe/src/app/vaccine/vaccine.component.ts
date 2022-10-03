import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {

 // viewalldoses:any
 userstatistics:any
userdoses:any

 constructor(private http:HttpClient) { }

  ngOnInit(): void {
   
    let resp_1 = this.http.get("http://localhost:8080/userdoses/userstatistics");
    resp_1.subscribe((data) => this.userstatistics = data);
    resp_1.subscribe((data) => console.log(data));

    let resp_2 = this.http.get("http://localhost:8080/userdoses/viewalldoses");
    resp_2.subscribe((data) => this.userdoses = data);
    resp_2.subscribe((data) => console.log(data));

  }

}
