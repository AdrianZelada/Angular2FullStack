/**
 * Created by iZel on 3/8/17.
 */

import { CommonModule } from '@angular/common';
import {Component,Input,ViewEncapsulation} from '@angular/core';
import {  FormGroup} from '@angular/forms';
import { FormBase} from './form.base'
import { FormControlService} from './form.service'

@Component({
  selector:'dynamic-form',
  template:`
<div>
  <form [formGroup]="form" class="row">
      <df-field *ngFor="let field of fields" [field]="field" [form]="form" [tpl]="tpl" [class]="containerClass"></df-field>
  </form>
</div>`,
  encapsulation:ViewEncapsulation.None,
  styleUrls:['./form-component.css'],
  providers:  [FormControlService,CommonModule]
})
export class DynamicFormComponent{
  @Input() fields: FormBase<any>[] = [];
  @Input() tpl:string='';
  @Input() containerClass?:string='col-md-12';
  @Input() form: FormGroup;

  constructor(private qcs: FormControlService) {
  }
}
