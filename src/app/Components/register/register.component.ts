import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/Models/Account';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  account : Account = {
    id : 0,
    email : "",
    password : "",
    balance : 0
  }

  constructor(private accountService : AccountService, private router : Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.accountService.createAccount(this.account).subscribe((Response)=>{
      this.router.navigate(["login"]);
    });
  }
}
