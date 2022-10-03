import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { LoginserviceService } from './loginservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 login: Login = new Login();

 constructor(private loginserviceService:LoginserviceService) { }


  ngOnInit(): void {
   
  }

  onSubmited(){
    const{userEmail,
      userPassword
     } = this.login;
      
    this.loginserviceService.Login(userEmail,
      userPassword
      ).subscribe({
      next: data => {
          console.log(data);
        
      
         
      }
    })

  }
  }

