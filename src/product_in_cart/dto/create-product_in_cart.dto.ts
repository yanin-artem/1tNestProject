import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateProductInCartDto {
  @ApiProperty({
    description: 'Ссылка на продукт',
    nullable: false,
  })
  product: Product;

  @ApiProperty({
    description: 'Ссылка на корзину',
    nullable: false,
  })
  cart: User;
}
