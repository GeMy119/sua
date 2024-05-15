import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  private apiUrl = environment.apiUrl; // Replace this with your actual API URL

  constructor(private http: HttpClient) { }

  getSingleSponsor(sponsorId: string, sourceNumber: string): Observable<any> {
    const url = `${this.apiUrl}/getSingleSponsor/${sponsorId}/${sourceNumber}`;
    console.log(url)
    return this.http.get<any>(url).pipe(
      catchError(error => {
        throw 'Error in retrieving sponsor data: ' + error; // You can handle errors here
      })
    );
  }
}
