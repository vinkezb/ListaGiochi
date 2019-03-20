import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginUser(event: any){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#Username').value
    const password = target.querySelector('#Password').value
    console.log(username, password)
  }

}
