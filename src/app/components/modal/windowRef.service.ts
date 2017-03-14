/**
 * Created by iZel on 3/14/17.
 */
import {Injectable} from '@angular/core';



function getWindow():any{
  return window;
}

@Injectable()
export class windowRefService{


  get ref() :any{
    return getWindow();
  }
}
