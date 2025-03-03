import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Partie } from 'src/core/models/partie';

@Injectable({
  providedIn: 'root',
})
export class PartieService {
  private apiUrl = 'http://localhost:3000/parties';

  constructor(private http: HttpClient) {}

  private handleError(error: any): Observable<never> {
    console.error('Une erreur s’est produite :', error);
    return throwError(() => new Error('Erreur lors de l’appel API'));
  }

  getParties(): Observable<Partie[]> {
    return this.http
      .get<Partie[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  getPartie(id: number): Observable<Partie> {
    return this.http
      .get<Partie>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  createPartie(partie: Partie): Observable<Partie> {
    return this.http
      .post<Partie>(this.apiUrl, partie)
      .pipe(catchError(this.handleError));
  }

  updatePartie(id: number, partie: Partie): Observable<Partie> {
    return this.http
      .put<Partie>(`${this.apiUrl}/${id}`, partie)
      .pipe(catchError(this.handleError));
  }

  deletePartie(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
}
