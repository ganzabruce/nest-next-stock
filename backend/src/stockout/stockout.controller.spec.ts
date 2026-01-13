import { Test, TestingModule } from '@nestjs/testing';
import { StockoutController } from './stockout.controller';
import { StockoutService } from './stockout.service';

describe('StockoutController', () => {
  let controller: StockoutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockoutController],
      providers: [StockoutService],
    }).compile();

    controller = module.get<StockoutController>(StockoutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
