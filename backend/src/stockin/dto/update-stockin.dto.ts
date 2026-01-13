import { PartialType } from '@nestjs/swagger';
import { CreateStockinDto } from './create-stockin.dto';

export class UpdateStockinDto extends PartialType(CreateStockinDto) {}
