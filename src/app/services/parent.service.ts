/**
 * Created by iZel on 3/2/17.
 */

import { Injectable,Inject ,Injector} from '@angular/core';
import { Http,Response, Headers, RequestOptions,RequestOptionsArgs } from '@angular/http';
import {END_POINT} from './contants'
//
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/observable/defer';

@Injectable()
export class ParentService {
  private headers = new Headers({'Content-Type': 'application/json', 'charset': 'UTF-8'});
  private optionsAssign = {headers: this.headers};
  // private options = new RequestOptions(this.optionsAssign);
  readonly ATTEMPTS =3;
  readonly DELAY =1000;

  static injector = Inject;

  constructor(private http:Http,private model:string){
    // this.model=`/api/${model}` ;
    this.model=END_POINT+model ;
  }

  $getAll<T>() {

    return this._curryHttp({
      method:'GET'
    }).retryWhen(this._retryStrategy());


  }


  $add(obj):Observable<any>{

    return this._curryHttp({
      method:'POST',
      body:obj
    }).retryWhen(this._retryStrategy());
  }

  $edit(obj,key): Observable<any> {
    obj['_key']=key;

    return this._curryHttp({
      method:'PUT',
      body:obj
    }).retryWhen(this._retryStrategy());
  }

  $delete(key) : Observable<any> {
    return this._curryHttp({
      method:'DELETE',
      url:this.model+`/${key}`
    }).retryWhen(this._retryStrategy());
  }

  service(options:RequestOptionsArgs): Observable<any>{
      return this._curryHttp(options)
        .retryWhen(this._retryStrategy());
  }


  static request (options:RequestOptionsArgs,http :Http): Observable<any>{
    let parent = new ParentService(http,'');
    return parent._curryHttp(options)
      .retryWhen(parent._retryStrategy());
  }

  protected _curryHttp(options):Observable<any>{
    let opt=Object.assign({},options,this.optionsAssign);
    return Observable.defer(() =>{
      return this.http.options(this.model||'',opt)
        .map(res => res.json());
    })
  }

  private _retryStrategy() {
    let _this=this;
    return function(errors) {
      return errors
        .scan((acc, value) => {
          acc+=1;
          if(acc < _this.ATTEMPTS){
            return acc
          }else{
            throw new Error(value)
          }
        }, 0)
        .delay(_this.DELAY);
    }
  }
}
