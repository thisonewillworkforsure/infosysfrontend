import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/Models/Account';
import { AccountService } from 'src/app/Services/account.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {

  account : Account = {
    id : 0,
    email : "",
    password : "",
    balance : 0
  }

  depositAmount : number = 0.0;
  withdrawAmount : number = 0.0;

  constructor(private activatedRoute : ActivatedRoute, private authService : AuthService, private accountService : AccountService,
    private router : Router) { }

  ngOnInit(): void {
    this.account = this.authService.currentAccount;
  }

  deposit(): void{
    if(this.depositAmount < 0) return;
    this.account.balance += this.depositAmount;
    this.accountService.updateAccount(this.account).subscribe((Response)=>{
      this.account = Response;
      this.depositAmount = 0;
    })
  }
  withdraw(): void{
    if(this.withdrawAmount > this.account.balance || this.withdrawAmount < 0) return;
    this.account.balance -= this.withdrawAmount;
    this.accountService.updateAccount(this.account).subscribe((Response)=>{
      this.account = Response;
      this.withdrawAmount = 0;
    })
  }

  logout(): void{
    this.authService.resetCurrentAccount();
    this.router.navigate([""]);
  }
}
