import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = environment.apiUrl; // Replace with your actual backend API URL

  constructor(private http: HttpClient) { }

  inquireAboutTransaction(transactionNumber: string): Observable<any> {
    const url = `${this.apiUrl}/transaction`;
    return this.http.post<any>(url, { transactionNumber });
  }
}