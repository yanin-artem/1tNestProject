import { ProductInCart } from 'src/product_in_cart/entities/product_in_cart.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  fullname: string;

  @Column()
  password: string;

  @OneToMany(() => ProductInCart, (product_in_cart) => product_in_cart.cart)
  product_in_cart: ProductInCart[];
}
