import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { mainResponse } from './jsonData';
import { Injectable } from '@angular/core';
import { tap, map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
const url = "https://hn.algolia.com/api/v1/search_by_date?tags=story";

@Injectable()
export class UserDetailsService {
  [x: string]: any;

  constructor(private http: HttpClient) { }
  UserDetails(): Observable<mainResponse> {

    return this.http.get<mainResponse>(url)
      .pipe(tap(res => {  }),
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
