import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  // loginForm: FormGroup = new FormGroup({
  //   email: new FormControl('',[Validators.required, Validators.email]),
  //   password : new FormControl('')
  // })

  login() {
    this.http.get<any>("http://localhost:3000/signupUsers")
      .subscribe({
        next: (res) => {
          const user = res.find((a: any) => {
            return a.email == this.loginForm.value.email &&
              a.password == this.loginForm.value.password
          }
          )
          if (user) {
            alert("Login Successfull")
            localStorage.setItem('token',user)
            this.loginForm.reset()
            this.router.navigate(['tickets'])
          }
          else{
            alert("User Not found")
            this.loginForm.reset()
          }
        },
        error: (err) => alert("Something Went Wrong")
      })
  }

  json = [
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
      class: 'btn btn-danger form-button',
      type: 'submit',
      value: 'Login'
    },
  ];

}
