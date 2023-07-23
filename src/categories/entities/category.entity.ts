import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/products/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Category {
  @ApiProperty({
    description: 'Айдишник категории',
    nullable: false,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Название категории',
    nullable: false,
  })
  @Column()
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  product: Product[];
}
