import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FindVisitService {

  private apiUrl = environment.apiUrl; // Replace this with your actual API URL

  constructor(private http: HttpClient) { }

  getVisit(visitNo: string): Observable<any> {
    const url = `${this.apiUrl}/findVisit/${visitNo}`;
    console.log(url)
    return this.http.get<any>(url).pipe(
      catchError(error => {
        throw 'Error in retrieving sponsor data: ' + error; // You can handle errors here
      })
    );
  }
  getVisitByQuery(visitNo: string): Observable<any> {
    const url = `${this.apiUrl}/findVisit?visaNo=${visitNo}`;
    console.log(url);
    return this.http.get<any>(url).pipe(
      catchError(error => {
        throw 'Error in retrieving visit data: ' + error;
      })
    );
  }
}

