import { Test, TestingModule } from '@nestjs/testing';
import { StockinController } from './stockin.controller';
import { StockinService } from './stockin.service';

describe('StockinController', () => {
  let controller: StockinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockinController],
      providers: [StockinService],
    }).compile();

    controller = module.get<StockinController>(StockinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
