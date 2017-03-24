/**
 * Created by iZel on 3/24/17.
 */
import { Injectable} from '@angular/core';
import { CanActivate,CanActivateChild} from '@angular/router';
import { AuthService} from './auth.service';

@Injectable()
export class GuardAuthUser implements CanActivate,CanActivateChild{

  constructor(private auth:AuthService){}
  canActivate(){
    console.log('canActivate')
    console.log(this.auth.isLogin())

    return this.auth.isLogin();
  }

  canActivateChild(){
    return this.auth.isLogin();
  }
}
