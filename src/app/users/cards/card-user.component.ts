/**
 * Created by iZel on 3/16/17.
 */
import {Component,Input} from '@angular/core';
import {Router} from '@angular/router';
import { SharedData } from '../../services/shared-data.service';

@Component({
  selector:'card-user',
  templateUrl:'./card-user.component.html',
})

export class CardUser{
  @Input() User;


  constructor(private router :Router,
              private shared : SharedData){

  }

  editUser(user){
    this.router.navigate(['users/abm'],{
      queryParams:{
        id:user.sid
      }
    });

    this.shared.setData(user)
  }

  public say(){

    console.log(this.User);
  }
}
