import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/Models/Account';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  account : Account = {
    id : 0,
    email : "",
    password : "",
    balance : 0
  }

  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
  }

  attemptToLogin() : void{
      this.accountService.getOneAccount(this.account).subscribe((Response)=>{
        console.log(Response);
      });
  }
}
