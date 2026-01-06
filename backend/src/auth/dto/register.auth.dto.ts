import { IsString, IsNotEmpty, IsEmail , MaxLength, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class RegisterAuthDto {
    @ApiProperty({
        description: 'The email of the user',
        example: 'test@example.com',
    })
    @IsEmail()
    @IsNotEmpty()   
    email: string;

    @ApiProperty({
        description: 'The password of the user',
        example: 'password',
    })
    @IsString()
    @MinLength(8)
    @MaxLength(32)
    password: string;

    @ApiProperty({
        description: 'The full names of the user',
        example: 'John Doe',
    })
    @IsString()
    @IsNotEmpty()
    fullNames: string;

    @ApiProperty({
        description: 'The phone number of the user',
        example: '+250788123456',
    })
    @IsString()
    @IsNotEmpty()
    phone: string;
}