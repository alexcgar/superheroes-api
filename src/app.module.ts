// src/app.module.ts
import { Module } from '@nestjs/common';
import { SuperheroModule } from './superheroes/superhero.module';

@Module({
  imports: [SuperheroModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
