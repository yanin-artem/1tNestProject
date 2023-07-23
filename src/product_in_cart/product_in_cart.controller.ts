import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProductInCartService } from './product_in_cart.service';
import { CreateProductInCartDto } from './dto/create-product_in_cart.dto';
import { UpdateProductInCartDto } from './dto/update-product_in_cart.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('product-in-cart')
export class ProductInCartController {
  constructor(private readonly productInCartService: ProductInCartService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createProductInCartDto: CreateProductInCartDto) {
    return this.productInCartService.create(createProductInCartDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.productInCartService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productInCartService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductInCartDto: UpdateProductInCartDto,
  ) {
    return this.productInCartService.update(+id, updateProductInCartDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productInCartService.remove(+id);
  }
}
