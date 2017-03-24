/**
 * Created by iZel on 3/6/17.
 */
import { Subscription } from 'rxjs/Subscription';

import { Component, OnDestroy, OnInit, ViewChild ,ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { UsersService } from '../services/users.service';
import { CardUser } from '../cards/card-user.component';
import { SharedData } from '../../services/shared-data.service';
import { AuthService } from '../../services/auth.service';
import { ParentService } from '../../services/parent.service';

import {user} from '../services/user.model'


@Component({
  selector:'users-list',
  templateUrl:'./users-list.component.html',
  styleUrls:['./users-list.css']
})

export class UsersListComponent implements OnInit{

  @ViewChild('cardUser', {read: ViewContainerRef})
  cardUser:ViewContainerRef;


  // @ViewChild('cardUser') private cardUser : CardUser;

  isLoading:boolean = true;
  isEditing = false;

  name:string = 'hola Adri';

  users : user[];
  error : boolean =false;
  component:any;

  constructor(
    private usersService:UsersService,
    private router:Router,
    private http:Http,
    private auth:AuthService,
    private componentFactoryResolver: ComponentFactoryResolver,
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
    this.usersService.$getAll<user>().subscribe(
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
      });

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

  viewUser(user){
    // this.router.navigate(['users/cards']);
    // console.log(user)
    // this.component = this.componentFactoryResolver.resolveComponentFactory(CardUser);
    // let card=this.cardUser.createComponent(this.component)
    // // this.component = this.componentFactoryResolver.resolveComponentFactory(CardUser);
    // card.instance['User']=user;
  }

  deleteUser(user){
    this.usersService.$delete(user.sid).subscribe(
      (data)=>{
        this.getUsers();
      }
    )
  }

  login(){
    this.auth.login();
  }
}
