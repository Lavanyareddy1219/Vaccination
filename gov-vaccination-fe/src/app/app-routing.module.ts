import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { UserComponent } from './user/user.component';
import { NewsComponent } from './news/news.component';
import { FaqComponent } from './faq/faq.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';
import { DosesregComponent } from './dosesreg/dosesreg.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
   { path: 'home', component: HomeComponent },
   { path: 'user', component: UserComponent },

  // { path: 'about', component: AboutComponent },
   { path: 'news', component: NewsComponent },
   { path: 'faq', component: FaqComponent },
   { path: 'helpdesk', component: HelpdeskComponent },
   { path: 'register', component:RegisterComponent },

   { path: 'contactus', component: ContactusComponent },
    { path: 'vaccine', component: VaccineComponent },
    { path: 'doses', component: DosesregComponent },

    { path: 'userlogin', component: UserloginComponent },




  //   {path: '', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
