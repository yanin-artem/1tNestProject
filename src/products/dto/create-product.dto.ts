import { Category } from 'src/categories/entities/category.entity';

export class CreateProductDto {
  image: string;

  name: string;

  price: number;

  available: boolean;

  category: Category;

  about: string;
}
