import { Injectable } from '@nestjs/common';
import { CreateProductInCartDto } from './dto/create-product_in_cart.dto';
import { UpdateProductInCartDto } from './dto/update-product_in_cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductInCart } from './entities/product_in_cart.entity';

@Injectable()
export class ProductInCartService {
  constructor(
    @InjectRepository(ProductInCart)
    private repository: Repository<ProductInCart>,
  ) {}

  create(data: CreateProductInCartDto) {
    return this.repository.save(data);
  }

  findAll() {
    return this.repository.find({ relations: ['product'] });
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, data: UpdateProductInCartDto) {
    return this.repository.save({ ...data, id });
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
