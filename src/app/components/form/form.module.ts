/**
 * Created by iZel on 3/29/17.
 */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'
import {AllFormComponents} from './all-form.components'
import {FormControlService} from './form.service'

@NgModule({
  imports:[
    FormsModule,
    RouterModule,
    CommonModule
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
