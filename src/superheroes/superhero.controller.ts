// src/superheroes/superhero.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Controller('superheroes')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  // Endpoint POST para agregar un superhéroe
  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroDto) {
    return this.superheroService.create(createSuperheroDto);
  }

  // Endpoint GET para obtener la lista de superhéroes ordenada
  @Get()
  findAll() {
    return this.superheroService.findAll();
  }
}
