import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';

import { DataService } from '../services/data.service';
import {UsersService} from "../services/users.service";
import {SettingsService} from "../services/settings.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cats = [];
  isLoading = true;

  cat = {};
  isEditing = false;

  users=[];

  addCatForm: FormGroup;
  userForm : FormGroup;
  name = new FormControl('', Validators.required);
  age = new FormControl('', Validators.compose([Validators.required,Validators.pattern('^[0-9]+$')]));
  weight = new FormControl('', Validators.required);

  constructor(private http: Http,
              private usersService: UsersService,
              private dataService: DataService,
              private settingsService: SettingsService,
              public toast: ToastComponent,
              private formBuilder: FormBuilder) {
    this.userForm=formBuilder.group({
        name:new FormControl('',Validators.required),
        lastName:new FormControl('',Validators.required),
        birthday:new FormControl('',Validators.required),
        email:new FormControl('',Validators.required),
        nickName:new FormControl('',Validators.required),
      }
    )
  }

  ngOnInit() {
    this.getUsers();

    this.addCatForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      weight: this.weight
    });
    console.log('ngOnInit')
  }

  getCats() {
    this.dataService.getCats().subscribe(
      data => this.cats = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }


  getUsers() {
    this.usersService.$getAll().subscribe(
      (data)=>{

        this.users=data;
        console.log(data)
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addUser(){
    this.usersService.$add(this.userForm.value).subscribe(
      res=>{
        console.log(res)
      },
      error=>{
        console.error(error)
      }
    )
  }

  addCat() {
    this.dataService.addCat(this.addCatForm.value).subscribe(
      res => {
        const newCat = res.json();
        this.cats.push(newCat);
        this.addCatForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(cat) {
    this.isEditing = true;
    this.cat = cat;
  }

  cancelEditing() {
    this.isEditing = false;
    this.cat = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the cats to reset the editing
    this.getCats();
  }

  editCat(cat) {
    this.dataService.editCat(cat).subscribe(
      res => {
        this.isEditing = false;
        this.cat = cat;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteCat(cat) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.dataService.deleteCat(cat).subscribe(
        res => {
          const pos = this.cats.map(elem => { return elem._id; }).indexOf(cat._id);
          this.cats.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
