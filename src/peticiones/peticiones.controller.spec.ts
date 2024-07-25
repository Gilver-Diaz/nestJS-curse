import { Test, TestingModule } from '@nestjs/testing';
import { PeticionesController } from './peticiones.controller';

describe('PeticionesController', () => {
  let controller: PeticionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeticionesController],
    }).compile();

    controller = module.get<PeticionesController>(PeticionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
