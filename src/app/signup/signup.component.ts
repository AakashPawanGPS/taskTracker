import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signupForm: FormGroup = new FormGroup({
    fname:new FormControl(''),
    lname:new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('')
  })

  json = [
    {
      id: 'fname',
      name:'fname',
      class: 'form-control form-box',
      type: 'text',
      label: 'First Name',
      fcn: 'fname',
      placeholder:'Enter Your First Name',
      formControlName:'fname'
    },
    {
      id: 'lname',
      name:'lname',
      class: 'form-control form-box',
      type: 'text',
      label: 'Last Name',
      fcn: 'lname',
      placeholder:'Enter Your Last Name',
      formControlName:'lname'
    },
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
      class: 'btn btn-primary form-button',
      type: 'submit',
      value:'Sign Up'
    },
  ];

  signup(){
    console.log("Signed Up");
    localStorage.setItem(
      JSON.stringify(this.signupForm.value.email),
      JSON.stringify(this.signupForm.value.password)
    );
    this.signupForm.reset()
  }

}
