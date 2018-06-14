import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcasterService {

  public configDataUpdated: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public loadConfig(configDataResponse: any): void {

    this.configDataUpdated.next(configDataResponse);
  }



}
