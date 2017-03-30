/**
 * Created by iZel on 3/29/17.
 */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {AllFormComponents} from './all-form.components'
import {FormControlService} from './form.service'

@NgModule({
  imports:[
    FormsModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AllFormComponents,
    FormsModule
  ],
  providers:[FormControlService],
  declarations: [AllFormComponents]
})

export class FormDynamicControlModule{
}
