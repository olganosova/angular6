import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  newVarL:string = 'xxx';

  constructor() { }

  echo(){
    return this.newVarL;
  }
}
