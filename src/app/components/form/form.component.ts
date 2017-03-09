/**
 * Created by iZel on 3/8/17.
 */

import { CommonModule } from '@angular/common';
import {Component,Input, Output,EventEmitter,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { FormBase} from './form.base'
import { FormControlService} from './form.service'
import { DynamicFormFieldComponent} from './field.component'

@Component({
  selector:'dynamic-form',
  template:`
<div>
  <form (ngSubmit)="onSubmit()" [formGroup]="form">
    <div *ngFor="let field of fields" class="form-row">
      <df-field [field]="field" [form]="form" [tpl]="tpl"></df-field>
    </div>
    <div class="form-row">
      <button type="submit" [disabled]="!form.valid" class="btn btn-success btn-md">Save</button>
    </div>
  </form>

  <div *ngIf="payLoad" class="form-row">
    <br><strong>Saved the following values</strong><br>{{payLoad}}
  </div>
</div>`,
  providers:  [FormControlService,CommonModule]
})
export class DynamicFormComponent {
  @Input() fields: FormBase<any>[] = [];
  @Input() tpl:string='';
  @Output('send') submitted: EventEmitter<any> = new EventEmitter();
  @Output('change') change: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  payLoad = '';
  // output={};
  // @ViewChild(DynamicFormFieldComponent) filterComponent: FilterTextComponent;

  constructor(private qcs: FormControlService) {  }


  ngOnInit(){
    this.form = this.qcs.toControlGroup(this.fields);
    this.form.valueChanges.subscribe((...data:any[]) => {
      this.change.emit(data);
    })
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    this.submitted.emit(this.form.value);
  }


}
