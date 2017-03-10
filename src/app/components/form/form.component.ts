/**
 * Created by iZel on 3/8/17.
 */

import { CommonModule } from '@angular/common';
import {Component,Input} from '@angular/core';
import {  FormGroup} from '@angular/forms';
import { FormBase} from './form.base'
import { FormControlService} from './form.service'

@Component({
  selector:'dynamic-form',
  template:`
<div>
  <form [formGroup]="form">
    <div *ngFor="let field of fields" class="form-row">
      <df-field [field]="field" [form]="form" [tpl]="tpl"></df-field>
    </div>
  </form>
</div>`,
  providers:  [FormControlService,CommonModule]
})
export class DynamicFormComponent{
  @Input() fields: FormBase<any>[] = [];
  @Input() tpl:string='';
  @Input() form: FormGroup;

  constructor(private qcs: FormControlService) {
  }
}
