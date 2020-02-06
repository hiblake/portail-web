import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm = this.fb.group(
      {
        email :['' , [Validators.required, Validators.email]]  ,
        pwd: ['', Validators.required]
      }


    )

  constructor(private fb: FormBuilder, private router: Router,) {

  }

  ngOnInit() {
  }

  public onSubmit() {
    this.loginForm.value.email;
    this.loginForm.value.pwd;
    debugger;
    this.router.navigate(['']);

  }

}
