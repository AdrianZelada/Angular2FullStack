/**
 * Created by iZel on 3/8/17.
 */

import {Component,Input} from '@angular/core';
import { FormGroup,  Validators,ReactiveFormsModule} from '@angular/forms';
import { FormBase} from './form.base'
import { CommonModule } from '@angular/common';
@Component({
  selector:'df-field',
  template:`
<div [formGroup]="form" class="form-group">
  <label [attr.for]="field.key" class="control-label">{{field.label}}</label>
  <div [ngSwitch]="field.controlType">
    <input *ngSwitchCase="'textbox'" [formControlName]="field.key" [value]="field.value" [id]="field.key" [type]="field.type" class="form-control" [placeholder]="field.placeholder" [disabled]="field.disabled" [readonly]="field.readonly">
    <select [id]="field.key" *ngSwitchCase="'dropdown'" [formControlName]="field.key" class="form-control" [value]="field.value">
      <option style="display:none" value="">Choose an option</option>
      <option *ngFor="let opt of field.options" [value]="opt.key">{{opt.value}}</option>
    </select>
  </div>
  <div style="color: red;" *ngIf="!isValid()">({{field.label}} is required)</div>
</div>`,
  providers:[ReactiveFormsModule,CommonModule]

})
export class DynamicFormFieldComponent {
  @Input() field:FormBase<any>;
  @Input() form:FormGroup;
  // get isValid() { return this.form.controls[this.field.key].valid; }
  isValid() { return this.form.controls[this.field.key].valid; }
}
