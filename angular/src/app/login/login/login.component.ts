import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    public loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      password:  new FormControl('', Validators.required),
      email: new FormControl('', [ Validators.required, Validators.email ]),
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.loginService.login(this.form.value).subscribe(res => {
      if (res.email) {
        localStorage.setItem('login', 'true')
        window.location.replace('/equipo')
      }
    })
  }

}
