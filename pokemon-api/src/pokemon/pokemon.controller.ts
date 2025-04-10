import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get(':id')
  getPokemon(@Param('id') id: string) {
    return this.pokemonService.getPokemon(id.toLowerCase());
  }
}
