/**
 * Created by iZel on 3/6/17.
 */
import { Subscription } from 'rxjs/Subscription';

import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';




@Component({
  selector:'users-list',
  templateUrl:'./users-list.component.html',
  styleUrls:['./users-list.css']
})

export class UsersListComponent implements OnInit{

  isLoading:boolean = true;
  isEditing = false;

  name:string = 'hola Adri';

  users=[];
  constructor(private usersService:UsersService){
  }


  ngOnInit(){
    console.log('users')
    this.getUsers();
  }

  getUsers(){
    console.log('start')
    console.log(this.isLoading)
    this.isLoading = true;
    this.usersService.$getAll().subscribe(
      (data)=>{
        this.users=data;
        console.log(data)
        this.isLoading = false;
      },
      (error)=>{
        console.log(error);
        this.isLoading = false;
      })
  }
}
