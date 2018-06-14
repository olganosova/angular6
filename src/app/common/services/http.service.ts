import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError,  retry, map  } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  configUrl: string = 'assets/config.json';
  newVarL:string = 'xxx';
  httpOptions: any;

  constructor(private http: HttpClient) { }



  getConfig() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.get(this.configUrl)
      .pipe(
      retry(3), // retry a failed request up to 3 times
        catchError((error) => this.handleError(error)) // then handle the error
    );
  }
  private handleError(error: Response | any) {
   error.errorCaught = 'Error occured';
    // return an observable with a user-facing error message
    return of( error );
   // return error as new Observable<{}>;
  };



  echo(){
    return this.newVarL;
  }
  // getMockData(url: string) {
  //
  //   return this.http.get(this.configUrl)
  //     .pipe(
  //       map(res => res.data) // or any other operator
  //     )
  // }


}
