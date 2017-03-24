/**
 * Created by iZel on 3/5/17.
 */
import { Component } from '@angular/core';

import { UsersService } from './services/users.service';
import { AuthService} from '../services/auth.service'

@Component({
  template: `
  <router-outlet></router-outlet>
`,
  providers: [UsersService]
})


export class UsersComponents  {
  constructor(private auth:AuthService){

  }

  click(){
    this.auth.login();
  }
}
