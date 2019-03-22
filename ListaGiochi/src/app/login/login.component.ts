import { Component, OnInit } from '@angular/core';
import { user } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: user= new user();

  onSubmit(){
    console.log("message:", this.form);
  }

  constructor() { }

  ngOnInit() {
  }



}
