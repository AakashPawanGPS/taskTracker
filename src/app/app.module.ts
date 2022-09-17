import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TicketsComponent } from './tickets/tickets.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ApiserviceService } from './services/apiservice.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TicketsComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
