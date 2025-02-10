// src/superheroes/superhero.service.ts
import { Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

export interface Superhero {
  id: number;
  name: string;
  superpower: string;
  humilityScore: number;
}

@Injectable()
export class SuperheroService {
  private superheroes: Superhero[] = [];
  private idCounter = 1;

  // Método para agregar un superhéroe
  create(createSuperheroDto: CreateSuperheroDto): Superhero {
    const newHero: Superhero = {
      id: this.idCounter++,
      ...createSuperheroDto,
    };
    this.superheroes.push(newHero);
    return newHero;
  }

  // Método para obtener la lista de superhéroes ordenada por humilityScore de forma descendente
  findAll(): Superhero[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
