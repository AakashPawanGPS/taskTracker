import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fname: [''],
      lname: [''],
      email: [''],
      password: ['']
    })
  }

  // signupForm: FormGroup = new FormGroup({
  //   fname:new FormControl(''),
  //   lname:new FormControl(''),
  //   email: new FormControl('',[Validators.required, Validators.email]),
  //   password : new FormControl('')
  // })

  json = [
    {
      id: 'fname',
      name: 'fname',
      class: 'form-control form-box',
      type: 'text',
      label: 'First Name',
      fcn: 'fname',
      placeholder: 'Enter Your First Name',
      formControlName: 'fname'
    },
    {
      id: 'lname',
      name: 'lname',
      class: 'form-control form-box',
      type: 'text',
      label: 'Last Name',
      fcn: 'lname',
      placeholder: 'Enter Your Last Name',
      formControlName: 'lname'
    },
    {
      id: 'email',
      name: 'Email',
      class: 'form-control form-box',
      type: 'email',
      label: 'Email',
      fcn: 'Email',
      placeholder: 'Enter Your Email',
      formControlName: 'email'
    },
    {
      id: 'pass',
      name: 'Password',
      class: 'form-control form-box',
      type: 'password',
      label: 'Password',
      fcn: 'pass',
      placeholder: 'Enter Your Password',
      formControlName: 'password'
    },
    {
      id: 'submit',
      class: 'btn btn-primary form-button',
      type: 'submit',
      value: 'Sign Up'
    },
  ];

  signup() {
    console.log("Signed Up");
    this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value)
    .subscribe({
      next: (res) =>{
        alert("Sign Up Successfull")
        this.signupForm.reset()
        this.router.navigate(['login'])
      },
      error : (err) => console.log("Something Went Wrong")
    })
  }
}
