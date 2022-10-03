import { Component, OnInit } from '@angular/core';
import { Register } from './register';
import { Userreg } from './userreg';
import { UserregService } from './userreg.service';
// import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  register: Register = new Register();
  userreg: Userreg = new Userreg();
  constructor(private userregService:UserregService) { }

  ngOnInit(): void {
  }
 
  onSubmited(){
    const{userUsername,
      userPassword,
      userEmail,
      userMobile,
      userGender,
      userState} = this.userreg;
      
    this.userregService.Userreg(userUsername,
      userPassword,
      userEmail,
      userMobile,
      userGender,
      userState).subscribe({
      next: data => {
          console.log(data);
      }
    })

  }

}
