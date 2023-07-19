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
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  available: boolean;

  @ManyToOne(() => Category, (category) => category.id, { eager: true })
  category: Category;

  @Column()
  about: string;
}
