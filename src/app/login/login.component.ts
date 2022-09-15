import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('')
  })

  json = [
    {
      id: 'email',
      name:'Email',
      class: 'form-control form-box',
      type: 'email',
      label: 'Email',
      fcn: 'Email',
      placeholder:'Enter Your Email',
      formControlName:'email'
    },
    {
      id: 'pass',
      name:'Password',
      class: 'form-control form-box',
      type: 'password',
      label: 'Password',
      fcn: 'pass',
      placeholder:'Enter Your Password',
      formControlName:'password'
    },
    {
      id: 'submit',
      class: 'btn btn-danger form-button',
      type: 'submit',
      value:'Login'
    },
  ];

  login(){
    console.log("Logged In");
    var email = localStorage.getItem(JSON.stringify(this.loginForm.value.email));
    console.log(email);
    if (email == JSON.stringify(this.loginForm.value.password)) {
      console.log('valid');
      this.loginForm.reset();
      
    } else {
      console.log('INVALID');
      alert("Check Your Email and Password")
      this.loginForm.reset();
    }
  }

}
