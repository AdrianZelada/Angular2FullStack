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
  <div [ngSwitch]="field.controlType">
    <input-form *ngSwitchCase="'textbox'" [field]="field" [form]="form" [tpl]="tpl"></input-form>
    <select-form *ngSwitchCase="'dropdown'" [field]="field" [form]="form" [tpl]="tpl"></select-form>
    <textarea-form *ngSwitchCase="'textArea'" [field]="field" [form]="form" [tpl]="tpl"></textarea-form>
    <radio-form *ngSwitchCase="'radio'" [field]="field" [form]="form" [tpl]="tpl"></radio-form>
  </div>`,
  providers:[ReactiveFormsModule,CommonModule]

})
export class DynamicFormFieldComponent {
  @Input() field:FormBase<any>;
  @Input() form:FormGroup;
  @Input() tpl:string;

}

class ParentComponent{
  @Input() field:FormBase<any>;
  @Input() form:FormGroup;
  @Input() tpl:string;
  isValid() { return this.form.controls[this.field.key].valid; }
  constructor(){}
}

@Component(
  {
    selector:'input-form',
    templateUrl:'./fields/input.html'
  }
)
export class inputForm extends ParentComponent{
  constructor(){
    super();
  }
}

@Component(
  {
    selector:'select-form',
    templateUrl:'./fields/select.html'
  }
)
export class selectForm extends ParentComponent{
  constructor(){
    super();
  }
}

@Component(
  {
    selector:'textarea-form',
    templateUrl:'./fields/textarea.html'
  }
)
export class textareaForm extends ParentComponent{
  constructor(){
    super();
  }
}

@Component(
  {
    selector:'radio-form',
    templateUrl:'./fields/checkbox.html'
  }
)
export class radioForm extends ParentComponent{
  constructor(){
    super();
  }
}


export const FormComponents = [DynamicFormFieldComponent,inputForm,selectForm,textareaForm,radioForm];
