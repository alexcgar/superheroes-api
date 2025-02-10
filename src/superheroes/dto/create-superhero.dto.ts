// src/superheroes/dto/create-superhero.dto.ts
import { IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class CreateSuperheroDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  superpower: string;

  @IsNumber()
  @Min(1)
  @Max(10)
  humilityScore: number;
}
