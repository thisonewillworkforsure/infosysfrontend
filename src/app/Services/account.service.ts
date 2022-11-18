import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../Models/Account';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl : any = "http://localhost:8081/accounts";

  constructor(private httpClient : HttpClient) { }

  getAllAccount() : Observable<Account[]>{
    return this.httpClient.get<Account[]>(this.baseUrl);
  }

  createAccount(account : Account) : Observable<Account>{
     return this.httpClient.post<Account>(this.baseUrl,account);
  }

  updateAccount(account : Account) : Observable<Account>{
    return this.httpClient.put<Account>(this.baseUrl,account);
 }

  getOneAccount(account : Account) : Observable<Account>{
    return this.httpClient.post<Account>(this.baseUrl+"/login",account);
  }

  
}
