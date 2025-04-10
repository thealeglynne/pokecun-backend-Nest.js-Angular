import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service'; // ← O './pokemon.service' si está dentro de `app`

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  pokemons: any;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemon('1').subscribe({
      next: (data) => {
        this.pokemons = data;
        console.log('Pokémon recibido:', data); // <- Este debería aparecer en consola
      },
      error: (err) => {
        console.error('Error al obtener el Pokémon:', err); // <- Esto aparece si hay CORS o error de backend
      },
    });
  }
}
