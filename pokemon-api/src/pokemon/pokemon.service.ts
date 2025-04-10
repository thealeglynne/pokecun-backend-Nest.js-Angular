import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Cache } from 'cache-manager';

@Injectable()
export class PokemonService {
  constructor(
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getPokemon(id: string) {
    const cacheKey = `pokemon_${id}`;
    const cached = await this.cacheManager.get(cacheKey);

    if (cached) return cached;

    try {
      const response = await firstValueFrom(
        this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      );
      const data = response.data;

      const result = {
        id: data.id,
        name: data.name,
        types: data.types.map((t) => t.type.name),
        abilities: data.abilities.map((a) => a.ability.name),
        sprite_url: data.sprites.front_default,
      };

      await this.cacheManager.set(cacheKey, result, 60); // cache por 60 segundos
      return result;
    } catch (error) {
      throw new HttpException('Pokémon not found', HttpStatus.NOT_FOUND);
    }
  }
}
