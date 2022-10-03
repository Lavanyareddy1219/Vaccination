import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
newsstastics:any
view:any
 // constructor() { }
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp_1 = this.http.get("http://localhost:8080/news/newsstatistics");
    resp_1.subscribe((data) => this.newsstastics = data);
    resp_1.subscribe((data) => console.log(data));



    let resp_2 = this.http.get("http://localhost:8080/news/view");
    resp_2.subscribe((data) => this.view = data);
    resp_2.subscribe((data) => console.log(data));

  }

}
