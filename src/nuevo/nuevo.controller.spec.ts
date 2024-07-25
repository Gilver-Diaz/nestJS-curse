import { Test, TestingModule } from '@nestjs/testing';
import { NuevoController } from './nuevo.controller';

describe('NuevoController', () => {
  let controller: NuevoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NuevoController],
    }).compile();

    controller = module.get<NuevoController>(NuevoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
