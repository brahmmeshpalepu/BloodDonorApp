import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username:any = "";
  public password:any = "";
  constructor() { }

  ngOnInit() {
  }

  loginPage(){
    console.log(this.username,this.password);
  }

}
