import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    fullNames?: string;
    email?: string;
    password?: string;
    phone?: string;
    role?: string;
}
