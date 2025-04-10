import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager'; // 👈 Import correcto
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    HttpModule,
    CacheModule.register(), // 👈 Cache configurado globalmente
    PokemonModule,
  ],
})
export class AppModule {}
