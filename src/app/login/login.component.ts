import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { ReturnStatement } from '@angular/compiler';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth : AuthService , private router :Router) { }

  ngOnInit(): void {
  }


  que3: string = "";
  que1: string = "";
  que2: string = "";


  login(){
    if (this.que1.toLowerCase() != "baby")
    {
      return;
    }
    if (this.que2.toLowerCase() != "kalu")
    {
      return;
    }
    if (this.que3.toLowerCase() != "heroine")
    {
      return;
    }
    this.auth.login();
    this.router.navigateByUrl("/home-of-love");
  }

}
