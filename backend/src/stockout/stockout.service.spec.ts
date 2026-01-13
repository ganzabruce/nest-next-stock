import { Test, TestingModule } from '@nestjs/testing';
import { StockoutService } from './stockout.service';

describe('StockoutService', () => {
  let service: StockoutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockoutService],
    }).compile();

    service = module.get<StockoutService>(StockoutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
