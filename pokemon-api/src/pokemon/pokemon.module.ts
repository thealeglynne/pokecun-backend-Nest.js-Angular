import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager'; // 👈 import correcto
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';

@Module({
  imports: [
    HttpModule,
    CacheModule.register(), // 👈 configuración por defecto
  ],
  providers: [PokemonService],
  controllers: [PokemonController],
})
export class PokemonModule {}
