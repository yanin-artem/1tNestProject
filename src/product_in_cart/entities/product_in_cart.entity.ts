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
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Product)
  @JoinColumn({ name: 'product' })
  product: Product;

  @Column()
  quantity: number;

  @ManyToOne(() => User, (cart) => cart.id, { eager: true })
  cart: User;
}
