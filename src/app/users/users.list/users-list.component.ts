/**
 * Created by iZel on 3/6/17.
 */
import { Subscription } from 'rxjs/Subscription';

import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { UsersService } from '../services/users.service';
import { SharedData } from '../../services/shared-data.service';
import { ParentService } from '../../services/parent.service';

import {user} from '../services/user.model'


@Component({
  selector:'users-list',
  templateUrl:'./users-list.component.html',
  styleUrls:['./users-list.css']
})

export class UsersListComponent implements OnInit{

  isLoading:boolean = true;
  isEditing = false;

  name:string = 'hola Adri';

  users : user[];
  error : boolean =false;

  constructor(
    private usersService:UsersService,
    private router:Router,
    private http:Http,
    public shared:SharedData
  ){
    console.log(Http)
    console.log(this.http)

  }


  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this.isLoading = true;
    // this.usersService.$getAll<user>().subscribe(
    //   (data)=>{
    //     this.users=data;
    //     console.log(data)
    //     this.isLoading = false;
    //   },
    //   (error)=>{
    //     console.log(error);
    //     this.users=[];
    //     this.error=true;
    //     this.isLoading = false;
    //   })

    ParentService.request({
      url:'api/users',
      method:'get'
    },this.http).subscribe(
      (data)=>{
        this.users=data;
        console.log(data)
        this.isLoading = false;
      },
      (error)=>{
        console.log(error);
        this.users=[];
        this.error=true;
        this.isLoading = false;
      })
    // this.usersService.service({
    //   url:'api/users',
    //   method:'get'
    // }).subscribe(
    //   (data)=>{
    //     this.users=data;
    //     console.log(data)
    //     this.isLoading = false;
    //   },
    //   (error)=>{
    //     console.log(error);
    //     this.users=[];
    //     this.error=true;
    //     this.isLoading = false;
    //   })
  }

  addUser(){
    this.router.navigate(['users/abm']);
    this.shared.setData({})
  }

  editUser(user){
    this.router.navigate(['users/abm'],{
      queryParams:{
        id:user.sid
      }
    });

    this.shared.setData(user)
  }

  deleteUser(user){
    this.usersService.$delete(user.sid).subscribe(
      (data)=>{
        this.getUsers();
      }
    )
  }
}
