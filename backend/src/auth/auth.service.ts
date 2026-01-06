import { Injectable, UnauthorizedException , BadRequestException } from '@nestjs/common';
import {LoginAuthDto} from './dto/login-auth-dto';
import {RegisterAuthDto} from './dto/register.auth.dto';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
    private jwtService: JwtService,
  ) {}

  

  async login(loginAuthDto: LoginAuthDto) {
    const { email, password } = loginAuthDto;
    const user = await this.authRepository.findOne({ where: { email } });
    if (!user) {
      throw new UnauthorizedException("User Doesn't exist! please create account first");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid credentials");
    }
    return {
      access_token: this.jwtService.sign({ userId: user.id }),
      user: {
        id: user.id,
        email: user.email,
        fullNames: user.fullNames,
        phone: user.phone,
        role: user.role,
      },
    };
  }
  async register(registerAuthDto: RegisterAuthDto) {
    const {fullNames,email, phone, password} = registerAuthDto;
    const user = await this.authRepository.findOne({ where: { email } });
    if(user){
      throw new BadRequestException("User Already exists! please login");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.authRepository.create({fullNames, email, phone, password: hashedPassword});
    await this.authRepository.save(newUser);
    return {
      access_token: this.jwtService.sign({ userId: newUser.id }),
      user: {
        id: newUser.id,
        email: newUser.email,
        fullNames: newUser.fullNames,
        phone: newUser.phone,
        role: newUser.role,
      },
      message: "User registered successfully",
    };
  }
}
