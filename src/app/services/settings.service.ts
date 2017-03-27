/**
 * Created by iZel on 3/2/17.
 */


import { Injectable } from '@angular/core';
import {ParentService} from './parent.service'
import { Http} from '@angular/http';

@Injectable()
export class SettingsService extends ParentService{

  constructor(http : Http){
    super(http,'settings');
  }
}
