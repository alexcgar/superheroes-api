// src/superheroes/superhero.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';

describe('SuperheroController', () => {
  let controller: SuperheroController;
  let service: SuperheroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroController],
      providers: [SuperheroService],
    }).compile();

    controller = module.get<SuperheroController>(SuperheroController);
    service = module.get<SuperheroService>(SuperheroService);
  });

  it('debería crear un nuevo superhéroe', () => {
    const dto = {
      name: 'Spiderman',
      superpower: 'Trepar paredes',
      humilityScore: 8,
    };
    const createdHero = controller.create(dto);
    expect(createdHero).toHaveProperty('id');
    expect(createdHero.name).toEqual('Spiderman');
  });

  it('debería retornar la lista de superhéroes ordenada por humilityScore', () => {
    service.create({ name: 'Hero1', superpower: 'Volar', humilityScore: 5 });
    service.create({ name: 'Hero2', superpower: 'Fuerza', humilityScore: 9 });
    const heroes = controller.findAll();
    expect(heroes[0].humilityScore).toBeGreaterThanOrEqual(
      heroes[1].humilityScore,
    );
  });
});
