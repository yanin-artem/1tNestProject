import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/categories/entities/category.entity';

export class CreateProductDto {
  @ApiProperty({
    description: 'Путь к изображению товара',
    nullable: true,
  })
  image: string;

  @ApiProperty({
    description: 'Название товара',
    nullable: false,
  })
  name: string;

  @ApiProperty({
    description: 'Цена товара',
    nullable: false,
  })
  price: number;

  @ApiProperty({
    description: 'Доступен ли товар для покупки',
    nullable: false,
  })
  available: boolean;

  @ApiProperty({
    description: 'Категория товара',
    nullable: false,
  })
  category: Category;

  @ApiProperty({
    description: 'Описание товара',
    nullable: true,
  })
  about: string;
}
