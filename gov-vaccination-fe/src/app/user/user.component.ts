import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userstatistics:any

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp_2 = this.http.get("http://localhost:8080/userregistrations/userstatistics");
    resp_2.subscribe((data) => this.userstatistics = data);
    resp_2.subscribe((data) => console.log(data));

  }
  }



