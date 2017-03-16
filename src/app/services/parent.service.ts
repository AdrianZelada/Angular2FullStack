/**
 * Created by iZel on 3/2/17.
 */

import { Injectable,Inject } from '@angular/core';
import { Http,Response, Headers, RequestOptions } from '@angular/http';
//
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ParentService {
  private headers = new Headers({'Content-Type': 'application/json', 'charset': 'UTF-8'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http:Http,private model:string){
    this.model=`/api/${model}`;

  }

  $getAll<T>() {
    return  this.http.get(this.model)
      .map(res => this.extractData<T[]>(res));
  }

  $getAllObservable() : Observable<any> {
    return this.http.get(this.model).map(res => res.json());
  }

  $add(obj):Observable<any>{
    return this.http.post(this.model,obj,this.options)
  }

  $edit(obj,key): Observable<any> {
    obj['_key']=key;
    return this.http.put(this.model, obj,this.options);
  }

  $delete(key) : Observable<any> {
    return this.http.delete(this.model+`/${key}`,this.options);
  }


  private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    return <T>(body || {});
  }





}
