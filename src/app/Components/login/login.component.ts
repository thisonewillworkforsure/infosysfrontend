import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/Models/Account';
import { AccountService } from 'src/app/Services/account.service';
import { AuthService } from 'src/app/Services/auth.service';

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

  constructor(private accountService : AccountService, private router : Router,
    private authService : AuthService) { }

  ngOnInit(): void {
  }

  attemptToLogin() : void{
      this.accountService.getOneAccount(this.account).subscribe((Response)=>{
        this.account = Response;
        if(this.isRegisteredAccount()){
          this.authService.setCurrentAccount(Response);
          this.router.navigate(["userMain/"+Response.id]);
        }
        else{
          this.resetAccount();
        }
      });
  }

  goToRegister() : void{
    this.router.navigate(["register"]);
  }

  isRegisteredAccount() : boolean{
    return this.account.id != 0; //The backend returns a 0 id if nothing is found
  }

  resetAccount() : void{
    this.account = {
      id : 0,
      email : "",
      password : "",
      balance : 0
    }
  }
}
