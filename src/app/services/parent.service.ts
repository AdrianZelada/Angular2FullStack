/**
 * Created by iZel on 3/2/17.
 */

import { Injectable,Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
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

  getAll() : Observable<any> {
    console.log(this.model)
    return this.http.get(this.model).map(res => res.json());
  }
}
