import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class ProductInCart {
  @ApiProperty({
    description: 'Айдишник корзины',
    nullable: false,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Ссылка на продукт',
    nullable: false,
  })
  @OneToOne(() => Product)
  @JoinColumn({ name: 'product' })
  product: Product;

  @ApiProperty({
    description: 'Количество этого продукта в корзине',
    nullable: false,
    default: 1,
    maximum: 1,
  })
  @Column({ default: 1 })
  quantity: number;

  //   @ApiProperty({
  //     description: 'Ссылка на корзину',
  //     nullable: false,
  //   })
  @ManyToOne(() => User, (cart) => cart.id, { eager: true })
  cart: User;
}
