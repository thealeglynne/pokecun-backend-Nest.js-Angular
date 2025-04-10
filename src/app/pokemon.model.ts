// src/app/pokemon.model.ts
export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  abilities: string[];
  sprite_url: string;
}