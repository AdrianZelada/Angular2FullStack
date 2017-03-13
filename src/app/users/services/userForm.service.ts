/**
 * Created by iZel on 3/8/17.
 */

import { Injectable } from '@angular/core';

import { FormBase, TextboxField, DropdownField ,TextAreaField,RadioField} from '../../components/form';

//////////////////////////////////////////////////

@Injectable()
export class UserFormService {

  // fields:(FormBase<any>[] = [
  fields:any[] = [

  new TextboxField({
    key:'name',
    label:'Name',
    required: true,
    placeholder: 'Name',
    order: 1
  }),

  new TextboxField({
    key:'lastName',
    label:'Last Name',
    required: true,
    placeholder: 'Last Name',
    order: 2
  }),

  new TextboxField({
    key:'nickName',
    label:'Nick name',
    required: true,
    placeholder: 'Nick',
    order: 3
  }),

  new TextboxField({
    key:'email',
    label:'Email',
    type: 'email',
    required: true,
    placeholder: 'Email',
    order: 4
  }),

  new DropdownField({
    key:'gender',
    label: 'Gender',
    options: [
      {key:'male',  value:'male'},
      {key:'female',  value:'female'}
    ],
    required: true,
    order: 5
  }),

  new TextboxField({
    // classField:'col-md-6',
    key:'birthday',
    label:'Birthdate',
    type: 'date',
    required: true,
    placeholder: 'Birthdate',
    order: 6
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


// fields:any[] = [
//
//   new TextboxField({
//     key:'username',
//     label:'Name',
//     required: true,
//     placeholder: 'Username',
//     order: 1
//   }),
//
//   new TextboxField({
//     key:'email',
//     label:'Email',
//     type: 'email',
//     required: true,
//     placeholder: 'Email',
//     order: 2
//   }),
//
//   new DropdownField({
//     key:'gender',
//     label: 'Gender',
//     options: [
//       {key:'male',  value:'male'},
//       {key:'female',  value:'female'}
//     ],
//     order: 3
//   }),
//
//   new TextboxField({
//     key:'birthdate',
//     label:'Birthdate',
//     type: 'date',
//     required: true,
//     placeholder: 'Birthdate',
//     order: 4
//   }),
//
//   new TextAreaField({
//     key:'comment',
//     label:'Comment',
//     required: true,
//     placeholder: 'Comment',
//     rows: 3
//   }),
//   new RadioField({
//     key:'send',
//     label:'Send For',
//     // class:'checkbox-inline',
//     class:'radio',
//     options:[
//       {
//         key:0,
//         value:'Sms',
//         disabled:false,
//         readonly:false
//       },
//       {
//         key:1,
//         value:'Email',
//         disabled:false,
//         readonly:false
//       }
//     ]
//   })
// ];
