/**
 * Created by iZel on 3/6/17.
 */

import {Injectable} from '@angular/core';

@Injectable()

export class SharedData{

  private data: Object ={};

  constructor(){}

  setData(params:Object){
    this.data=params
  }
  getData():any{
      return this.data;
  }

}
