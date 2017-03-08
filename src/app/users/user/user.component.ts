/**
 * Created by iZel on 3/6/17.
 */
import { Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { UsersService} from  '../services/users.service';
import { UserFormService} from  '../services/userForm.service';
import { SharedData } from  '../../services/shared-data.service';
import { ActivatedRoute, Router} from '@angular/router';

import {DynamicFormComponent} from '../../components/form'




@Component({
  selector:'user',
  templateUrl:'./user.component.html',
  providers:  [UserFormService]
})

export class UserComponent implements OnInit{

  user:Object={};
  userForm : FormGroup;

  stateBtn : boolean=false;
  fields:any[];

  stateUser:string ='status status';
  constructor(
    public formBuilder: FormBuilder,
    public usersService : UsersService,
    public routes:ActivatedRoute,
    public router:Router,
    private shared:SharedData,
    private formUse:UserFormService
  ){
    this.stateBtn=false;
    this.fields=formUse.getFields({
      username:'asdasd',
      email:'zelada.torrez@hotmail.com',
      gender:'male',
      birthdate:"2017-03-16"
    });
  }

  ngOnInit() {
    this.user = this.shared.getData();
    this.userForm=this.formBuilder.group({
        name:new FormControl('',Validators.required),
        lastName:new FormControl('',Validators.required),
        birthday:new FormControl('',Validators.required),
        email:new FormControl('',Validators.required),
        nickName:new FormControl('',Validators.required),
      }
    );
    if(this.user['sid']){
      this.stateBtn=true;
    }
    Object.keys(this.userForm.controls).forEach((val)=>{
      this.userForm.controls[val].patchValue(this.user[val]);
    });
  }

  addUser(){
    if(this.stateBtn){
      Object.assign(this.user,this.userForm.value)
      this.usersService.$edit(this.user,'sid').subscribe(
        res=>{
          this.router.navigate(['users']);
          console.log(res)
        },
        error=>{
          console.error(error)
        }
      )
    }else{
      this.usersService.$add(this.userForm.value).subscribe(
        res=>{
          this.router.navigate(['users']);
          console.log(res)
        },
        error=>{
          console.error(error)
        }
      )
    }
  }

  cancel(){
    this.router.navigate(['users']);
  }

  save(object) {

    // Here you can save the object
    console.log(object);
  }

}
