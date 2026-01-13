import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post("create")
  CreateProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Post("create-many")
  CreateManyProducts(@Body() createProductDto: CreateProductDto[]) {
    return this.productsService.createMany(createProductDto);
  }

  @Get("get-all")
  GetAllProducts() {
    return this.productsService.findAll();
  }


  @Patch("update/:id")
  UpdateProduct(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(parseInt(id), updateProductDto);
  }

  @Delete("delete/:id")
  DeleteProduct(@Param("id") id: string) {
    return this.productsService.delete(parseInt(id));
  }
}
