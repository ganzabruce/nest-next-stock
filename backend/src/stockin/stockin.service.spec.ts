import { Test, TestingModule } from '@nestjs/testing';
import { StockinService } from './stockin.service';

describe('StockinService', () => {
  let service: StockinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockinService],
    }).compile();

    service = module.get<StockinService>(StockinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
