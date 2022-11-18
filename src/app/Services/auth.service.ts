import { Injectable } from '@angular/core';
import { Account } from '../Models/Account';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentAccount : Account = {
    id : 0,
    email : "",
    password : "",
    balance : 0
  }

  constructor() { }

  setCurrentAccount(account : Account) : void{
    this.currentAccount = account;
  }

  resetCurrentAccount() : void{
    this.currentAccount = {
      id : 0,
      email : "",
      password : "",
      balance : 0
    }
  }
}
