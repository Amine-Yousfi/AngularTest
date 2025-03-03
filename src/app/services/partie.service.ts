import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partie } from 'src/core/models/partie';


@Injectable({
  providedIn: 'root',
})
export class PartieService {
  private apiUrl = 'http://localhost:3000/parties'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  // Récupérer toutes les parties
  getParties(): Observable<Partie[]> {
    return this.http.get<Partie[]>(this.apiUrl);
  }

  // Récupérer une partie par ID
  getPartie(id: number): Observable<Partie> {
    return this.http.get<Partie>(`${this.apiUrl}/${id}`);
  }

  // Créer une nouvelle partie
  createPartie(partie: Partie): Observable<Partie> {
    return this.http.post<Partie>(this.apiUrl, partie);
  }

  // Mettre à jour une partie existante
  updatePartie(id: number, partie: Partie): Observable<Partie> {
    return this.http.put<Partie>(`${this.apiUrl}/${id}`, partie);
  }

  // Supprimer une partie
  deletePartie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
