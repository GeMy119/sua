import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MariagePermitService {
  private apiUrl = environment.apiUrl; // Adjust the URL as per your backend API

  constructor(private http: HttpClient) { }

  findMariagePermit(idNumber: string, outgoingNumber: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/mariagePermit/${idNumber}/${outgoingNumber}`);
  }
}
