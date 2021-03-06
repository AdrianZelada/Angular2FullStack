/**
 * Created by iZel on 3/8/17.
 */

export class FormBase<T>{
  value:T;
  key:string;
  label:string;
  required:boolean;
  readonly:boolean;
  disabled:boolean;
  order:number;
  controlType:string;
  placeholder:string;
  options:any[];
  rows:number;
  class:string;
  pattern:string;
  classField:string;
  constructor(options:{
    value?:T,
    key?:string,
    label?:string,
    required?:boolean,
    readonly?:boolean,
    classField?:string;
    disabled?:boolean,
    order?:number,
    controlType?:string,
    placeholder?:string
  } = {}){
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.classField = options.classField || '';
    this.required = !!options.required;
    this.readonly = !!options.readonly;
    this.disabled = !!options.disabled;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.placeholder = options.placeholder || '';
  }
}

//////////////////////////////////////////////////


export class TextboxField extends FormBase<string>{
  controlType = 'textbox';
  type:string;

  constructor(options:{} = {}){
    super(options);
    this.type = options['type'] || '';
    if(this.type=='email'){
      this.pattern="^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w+)+$";
    }else{
      this.pattern="";
    }
  }
}

//////////////////////////////////////////////////

export class DropdownField extends FormBase<string>{
  controlType = 'dropdown';
  options:{key:string, value:string}[] = [];

  constructor(options:{} = {}){
    super(options);
    this.options = options['options'] || [];
  }

  setOptions ( newOptions : any[]){
    this.options = newOptions;
  }
}


export class TextAreaField extends FormBase<string>{
  controlType = 'textArea';

  constructor(options:{} = {}){
    super(options);
    this.rows = options['rows'] || 5;
  }
}

export class RadioField extends FormBase<string>{
  controlType = 'radio';
  options:{
    key:string,
    value:string,
    disabled:boolean,
    readonly:boolean
  }[] = [];

  constructor(options:{} = {}){
    super(options);
    this.options = options['options'] || [];
  }
}

