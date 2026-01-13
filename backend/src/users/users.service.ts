import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';
import { ConflictException } from '@nestjs/common';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Product)
    private userRepository: Repository<Product>
  ){}


  async create(createUserDto: CreateUserDto) {
    const {fullNames, email , password, phone } = createUserDto
    const user = await this.userRepository.findOne({ email})
    if(user){
      throw new ConflictException("the user with that email already exists")
    }
    const newUser  = await this.userRepository.create({fullNames, email , password, phone })
    await this.userRepository.save(newUser);
    return{
      status: "success",
      message:"user is created successfully"
    }

  }

  async findAll() {
    const users = await this.userRepository.find()
    return {
      status: "success",
      data:users
    }
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne(id)
    if(!user){
      return{
        status:"success",
        message: "there's no such user in the system"
      }
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const {fullNames, email , password, phone, role } = updateUserDto
    const user = await this.userRepository.findOne(id)
    if(!user){
      return{
        status:"success",
        message: "there's no such user in the system"
      }
    }



  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
