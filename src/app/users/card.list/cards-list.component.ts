/**
 * Created by iZel on 3/17/17.
 */
import { Component, OnDestroy, OnInit, ViewChild ,ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { UsersService } from '../services/users.service';
import { CardUser } from '../cards/card-user.component';
import { SharedData } from '../../services/shared-data.service';
import {user} from '../services/user.model'

@Component({
    selector:'cards-list',
    templateUrl:'./cards-list.component.html'
})

export class CardsList{

  @ViewChild('cardUser', {read: ViewContainerRef})
  cardUser:ViewContainerRef;


  // @ViewChild('cardUser') private cardUser : CardUser;

  isLoading:boolean = true;
  isEditing = false;

  name:string = 'hola Adri';

  users : user[];
  error : boolean =false;
  component:any;
  cardUsers: any[];

  constructor(
    private usersService:UsersService,
    private router:Router,
    private http:Http,
    private componentFactoryResolver: ComponentFactoryResolver,
    public shared:SharedData
  ){
    console.log(Http)
    console.log(this.http)

    this.cardUsers=[];
  }

  ngOnInit(){
    this.cardUsers=[];
    this.getUsers();

  }

  getUsers(){
    let some = this;
    this.isLoading = true;
    this.usersService.$getAll<user>().subscribe(
      (data)=>{
        this.users=data;
        console.log(data)
        this.isLoading = false;

        let fist =this.users[0]
        this.component = this.componentFactoryResolver.resolveComponentFactory(CardUser);
        this.users.forEach((user)=>{
          let card=this.cardUser.createComponent(this.component)
          card.instance['User']=user;
          this.cardUsers.push(card)
        });

        this.cardUsers.forEach((card)=>{
          // card.say();
            card['_component'].say()
        })



        // this.component = this.componentFactoryResolver.resolveComponentFactory(CardUser);


        // this.cardUsers.push(this.componentFactoryResolver.resolveComponentFactory(CardUser));


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
    console.log(user)
    this.component = this.componentFactoryResolver.resolveComponentFactory(CardUser);
    let card=this.cardUser.createComponent(this.component)
    // this.component = this.componentFactoryResolver.resolveComponentFactory(CardUser);
    card.instance['User']=user;
  }

  deleteUser(user){
    this.usersService.$delete(user.sid).subscribe(
      (data)=>{
        this.getUsers();
      }
    )
  }
}
