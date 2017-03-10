/**
 * Created by iZel on 3/8/17.
 */

import { Injectable } from '@angular/core';

import { FormBase, TextboxField, DropdownField } from '../../components/form';

//////////////////////////////////////////////////

@Injectable()
export class UserFormService {

  fields:FormBase<any>[] = [

  new TextboxField({
    key:'username',
    label:'Name',
    required: true,
    placeholder: 'Username',
    order: 1
  }),

  new TextboxField({
    key:'email',
    label:'Email',
    type: 'email',
    required: true,
    placeholder: 'Email',
    order: 2
  }),

  new DropdownField({
    key:'gender',
    label: 'Gender',
    options: [
      {key:'male',  value:'male'},
      {key:'female',  value:'female'}
    ],
    order: 3
  }),

  new TextboxField({
    key:'birthdate',
    label:'Birthdate',
    type: 'date',
    required: true,
    placeholder: 'Birthdate',
    order: 4
  })
];

  constructor() {}




  getFields() {
    return this.fields.sort((a,b) => a.order - b.order);
  }


  setOptions(index :number){
    this.fields[index].setOptions(
      [
        {key:'0',  value:'cero'},
        {key:'1',  value:'uno'}
      ]
    )
    console.log(index)

  }
}
