import { Test, TestingModule } from '@nestjs/testing';
import { SubCategoriesService } from './subCategories.service';

describe('SubCategoriesService', () => {
  let service: SubCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubCategoriesService],
    }).compile();

    service = module.get<SubCategoriesService>(SubCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
