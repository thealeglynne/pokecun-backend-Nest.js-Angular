import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'http://localhost:3000/pokemon'; // Ajusta si tu endpoint es distinto

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
