import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';
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

  @ManyToOne(() => Category, (category) => category.id)
  category: Category;

  @Column()
  about: string;
}
