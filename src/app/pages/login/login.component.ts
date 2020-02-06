import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { visitAll } from '@angular/compiler';


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

  constructor(private fb: FormBuilder, private router: Router, public auth: AngularFireAuth) {

  }

  ngOnInit() {
  }

  public onSubmit() {
    this.auth.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.pwd).then(user => {
      debugger;
    })
    .catch(e => {
      debugger;
    });
    this.router.navigate(['']);
  }

}
