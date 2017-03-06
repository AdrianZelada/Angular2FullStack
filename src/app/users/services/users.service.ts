import { Injectable } from '@angular/core';
import {ParentService} from '../../services/parent.service'
import { Http} from '@angular/http';

@Injectable()
export class UsersService extends ParentService{

  constructor(http : Http){
    super(http,'users');
  }

}
