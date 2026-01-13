import { PartialType } from '@nestjs/swagger';
import { CreateStockoutDto } from './create-stockout.dto';

export class UpdateStockoutDto extends PartialType(CreateStockoutDto) {}
