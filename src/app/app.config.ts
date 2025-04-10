// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pokemon: Pokemon | null = null;
  error: string | null = null;
  pokemonId: string = '1'; // ID inicial

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(): void {
    this.pokemonService.getPokemon(this.pokemonId).subscribe({
      next: (data: Pokemon) => {
        this.pokemon = data;
        this.error = null;
      },
      error: (err) => {
        this.error = 'No se pudo cargar el Pokémon. Verifica el ID o el servidor.';
        this.pokemon = null;
      }
    });
  }

  searchPokemon(id: string): void {
    this.pokemonId = id;
    this.loadPokemon();
  }
}