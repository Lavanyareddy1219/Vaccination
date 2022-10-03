import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Faq } from './faq';
import { FaqService } from './faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
faq : Faq=new Faq();
view:any

  constructor(private faqService:FaqService, private http:HttpClient) { }

  ngOnInit(): void {
    let resp_1 = this.http.get("http://localhost:8080/question/view");
    resp_1.subscribe((data) => this.view = data);
    resp_1.subscribe((data) => console.log(data));

  }

  onSubmited(){
    const{question,
      answer
    
      } = this.faq;
      
    this.faqService.Faq(question,
      answer
    ).subscribe({
      next: data => {
          console.log(data);
      }
    })

  }

}
