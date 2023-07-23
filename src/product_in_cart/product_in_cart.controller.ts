import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { ProductInCartService } from './product_in_cart.service';
import { CreateProductInCartDto } from './dto/create-product_in_cart.dto';
import { UpdateProductInCartDto } from './dto/update-product_in_cart.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductInCart } from './entities/product_in_cart.entity';

@ApiTags('Product in cart')
@Controller('product-in-cart')
export class ProductInCartController {
  constructor(private readonly productInCartService: ProductInCartService) {}

  @ApiOperation({ summary: 'Создание продукта в корзине' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: ProductInCart,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createProductInCartDto: CreateProductInCartDto) {
    return this.productInCartService.create(createProductInCartDto);
  }

  @ApiOperation({ summary: 'Получение всех продуктов' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: ProductInCart,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.productInCartService.findAll();
  }

  @ApiOperation({ summary: 'Получение продукта по id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: ProductInCart,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productInCartService.findOne(+id);
  }

  @ApiOperation({ summary: 'Обновление продукта' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: ProductInCart,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductInCartDto: UpdateProductInCartDto,
  ) {
    return this.productInCartService.update(+id, updateProductInCartDto);
  }

  @ApiOperation({ summary: 'Удаление' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: ProductInCart,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productInCartService.remove(+id);
  }
}
