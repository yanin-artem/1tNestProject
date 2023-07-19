import { Module } from '@nestjs/common';
import { ProductInCartService } from './product_in_cart.service';
import { ProductInCartController } from './product_in_cart.controller';

@Module({
  controllers: [ProductInCartController],
  providers: [ProductInCartService]
})
export class ProductInCartModule {}
