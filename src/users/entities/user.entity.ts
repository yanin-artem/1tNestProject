import { ApiProperty } from '@nestjs/swagger';
import { ProductInCart } from 'src/product_in_cart/entities/product_in_cart.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @ApiProperty({
    description: 'Айдишник пользователя пользователя',
    nullable: false,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Почта пользователя',
    nullable: false,
  })
  @Column()
  email: string;

  @ApiProperty({
    description: 'ФИО пользователя',
    nullable: false,
  })
  @Column()
  fullname: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    nullable: false,
  })
  @Column()
  password: string;

  @OneToMany(() => ProductInCart, (product_in_cart) => product_in_cart.cart)
  product_in_cart: ProductInCart[];
}
