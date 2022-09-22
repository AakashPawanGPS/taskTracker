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
  // public signupForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // this.signupForm = this.formBuilder.group({
    //   fname: ['',Validators.required],
    //   lname: ['',Validators.required],
    //   email: ['',Validators.required],
    //   password: ['',Validators.required]
    // })
  }

  signupForm: FormGroup = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@corestack+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
  })

  json = [
    {
      id: 'fname',
      name: 'fname',
      class: 'form-control form-box',
      type: 'text',
      label: 'First Name',
      fcn: 'fname',
      placeholder: 'Enter Your First Name',
      formControlName: 'fname',
      msg: '* Required Field'
    },
    {
      id: 'lname',
      name: 'lname',
      class: 'form-control form-box',
      type: 'text',
      label: 'Last Name',
      fcn: 'lname',
      placeholder: 'Enter Your Last Name',
      formControlName: 'lname',
      msg: '* Required Field'
    },
    {
      id: 'email',
      name: 'Email',
      class: 'form-control form-box',
      type: 'email',
      label: 'Email',
      fcn: 'Email',
      placeholder: 'Enter Your Email',
      formControlName: 'email',
      msg: '* Invalid Email'
    },
    {
      id: 'password',
      name: 'Password',
      class: 'form-control form-box',
      type: 'password',
      label: 'Password',
      fcn: 'pass',
      placeholder: 'Enter Your Password',
      formControlName: 'password',
      msg: '* Password Should be more than 8 Characters with atleast one uppercase character, one lowercase character, a symbol and a number.'
    }
  ];

  signup() {
    console.log("Signed Up");
    this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value)
      .subscribe({
        next: (res) => {
          alert("Sign Up Successfull")
          this.signupForm.reset()
          this.router.navigate(['login'])
        },
        error: (err) => console.log("Something Went Wrong")
      })
  }
  fname() {
    return this.signupForm.get('fname')
  }
  lname() {
    return this.signupForm.get('lname')
  }
  email() {
    return this.signupForm.get('email')
  }
  password() {
    return this.signupForm.get('password')
  }

}
