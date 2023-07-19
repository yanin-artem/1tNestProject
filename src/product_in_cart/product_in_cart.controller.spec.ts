import { Test, TestingModule } from '@nestjs/testing';
import { ProductInCartController } from './product_in_cart.controller';
import { ProductInCartService } from './product_in_cart.service';

describe('ProductInCartController', () => {
  let controller: ProductInCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductInCartController],
      providers: [ProductInCartService],
    }).compile();

    controller = module.get<ProductInCartController>(ProductInCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
