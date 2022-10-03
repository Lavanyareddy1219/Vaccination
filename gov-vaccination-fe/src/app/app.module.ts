import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{ MatToolbarModule  } from '@angular/material/toolbar';
import{ MatIconModule } from '@angular/material/icon';
import{ MatSidenavModule } from '@angular/material/sidenav';

import{ MatListModule } from '@angular/material/list';

import{  MatButtonModule } from '@angular/material/button';
import{  MatInputModule } from '@angular/material/input';
import{  MatRadioModule } from '@angular/material/radio';
import{  MatSelectModule } from '@angular/material/select';
import{  MatDatepickerModule } from '@angular/material/datepicker';




import { FlexLayoutModule } from '@angular/flex-layout';


import {MatCardModule} from '@angular/material/card';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VaccineComponent } from './vaccine/vaccine.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NewsComponent } from './news/news.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { FaqComponent } from './faq/faq.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';
import { DosesregComponent } from './dosesreg/dosesreg.component';
// import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    VaccineComponent,
    HomeComponent,
    UserComponent,
    NewsComponent,
    HelpdeskComponent,
    FaqComponent,
    UserloginComponent,
    ContactusComponent,
    RegisterComponent,
    DosesregComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
  
    





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
