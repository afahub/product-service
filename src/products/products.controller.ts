import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(
    @Body() body: { name: string; price: number },
  ): Promise<Product> {
    return this.productsService.create(body.name, body.price);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }
}
