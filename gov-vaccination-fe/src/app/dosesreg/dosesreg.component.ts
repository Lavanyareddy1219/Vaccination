import { Component, OnInit } from '@angular/core';
import { Dose } from './dose';
import { DoseService } from './dose.service';

@Component({
  selector: 'app-dosesreg',
  templateUrl: './dosesreg.component.html',
  styleUrls: ['./dosesreg.component.css']
})
export class DosesregComponent implements OnInit {
dose:Dose=new Dose();
  constructor(private doseService:DoseService) { }

  ngOnInit(): void {
  }
  onSubmited(){
    const{userRegistrationId,
      uservaccinationType,
      userFirstDose,
      userSecondDose,
      userAEFIpostFirstdosedescription,
      userAEFIpostFirstdose
      } = this.dose;
      
    this.doseService.Dose(userRegistrationId,
      uservaccinationType,
      userFirstDose,
      userSecondDose,
      userAEFIpostFirstdosedescription,
      userAEFIpostFirstdose).subscribe({
      next: data => {
          console.log(data);
      }
    })

  }

}
