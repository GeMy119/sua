import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import * as JsBarcode from 'jsbarcode';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  private apiUrl = environment.apiUrl; // Replace this with your actual API URL

  constructor(private http: HttpClient) { }

  getVisit(visitNo: string): Observable<any> {
    const url = `${this.apiUrl}/getSingleSponsor/${visitNo}`;
    console.log(url)
    return this.http.get<any>(url).pipe(
      catchError(error => {
        throw 'Error in retrieving sponsor data: ' + error; // You can handle errors here
      })
    );
  }
  generateBarcode(data: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      JsBarcode(canvas, data, {
        format: 'CODE128'
      });
      canvas.toDataURL('image/png', (err: any, barcodeUrl: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(barcodeUrl);
        }
      });
    });
  }

}
