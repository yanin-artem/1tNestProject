import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { ProductInCart } from 'src/product_in_cart/entities/product_in_cart.entity';
import { ApiProperty } from '@nestjs/swagger';
@Entity()
export class Product {
  @ApiProperty({
    description: 'Айдишник товара',
    nullable: false,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Путь к изображению товара',
    nullable: false,
  })
  @Column()
  image: string;

  @ApiProperty({
    description: 'Название товара товара',
    nullable: false,
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'Цена товара',
    nullable: false,
  })
  @Column()
  price: number;

  @ApiProperty({
    description: 'Доступен ли товар для покупки',
    nullable: false,
  })
  @Column()
  available: boolean;

  @ApiProperty({
    description: 'Категория товара',
    nullable: false,
  })
  @ManyToOne(() => Category, (category) => category.id, { eager: true })
  category: Category;

  @ApiProperty({
    description: 'Описание товара',
    nullable: false,
  })
  @Column()
  about: string;
}
