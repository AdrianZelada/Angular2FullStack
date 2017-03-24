/**
 * Created by iZel on 3/24/17.
 */
import { Injectable} from '@angular/core';

@Injectable()
export class AuthService{
  private auth:boolean=false;
  constructor(){
    this.auth=false;
  }

  isLogin(){
    return this.auth;
  }

  login(){
    this.auth= !this.auth;
    console.log(this.auth)
  }
}
