/**
 * Created by iZel on 3/6/17.
 */
import { Component, Output, OnInit, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { UsersService} from  '../services/users.service';
import { UserFormService} from  '../services/userForm.service';
import { SharedData } from  '../../services/shared-data.service';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector:'user',
  templateUrl:'./user.component.html',
  providers:  [UserFormService]
})

export class UserComponent implements OnInit{

  user:Object={};
  form : FormGroup;

  stateBtn : boolean=false;
  valid : boolean=false;
  run : boolean=false;
  fields:any[];
  styleForm:string ='bootstrap';
  containerClass:string ='col-md-6';

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
  }

  ngOnInit() {
    this.user = this.shared.getData();

    this.stateBtn = this.user['sid'] != undefined;
    this.fields=this.formUse.getFields();

    this.form=this.formBuilder.group({
      name:new FormControl(this.user['name'] || '',Validators.required),
      lastName:new FormControl(this.user['lastName'] || '',Validators.required),
      nickName:new FormControl(this.user['nickName'] || '',Validators.required),
      email:new FormControl(this.user['email']|| '',Validators.required),
      gender:new FormControl('male'|| '',Validators.required),
      birthday:new FormControl(this.user['birthday']|| '',Validators.required)
    });


    this.form.valueChanges.subscribe((...data:any[]) => {
      console.log(data)
    });

  }

  addUser(){
    if(this.stateBtn){
      Object.assign(this.user,this.form.value);
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
      this.usersService.$add(this.form.value).subscribe(
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

  saveBtn(){
    console.log(this.form.value);
  }

  changeOpt(){
    this.formUse.setOptions(2)
  }


}
