/**
 * Created by iZel on 3/5/17.
 */
import { Component } from '@angular/core';

import { UsersService } from './services/users.service';

@Component({
  template: `<router-outlet></router-outlet>`,
  providers: [UsersService]
})


export class UsersComponents  {}
