import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/database/service/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) { }

  selectUserQuery = {
    id: true,
    username: true,
    name: true,
    password: true,
    achievements: {
      select: {
        id: true,
        title: true,
        icon:true,
        color:true,
        acquired:true,
        description: true
      }
    }
  }

  async create(CreateUserDto: CreateUserDto) {
    return await this.prismaService.user.create({
      data: CreateUserDto
    })
  }

  async findAll() {
    return await this.prismaService.user.findMany({
      select: this.selectUserQuery
    });
  }

  async findOne(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id
      },
      select: this.selectUserQuery
    });

    if (!user) {
      Logger.error('User not found');
      return 'User Not found'
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id
      }
    });

    if (!user) {
      Logger.error('User not found');
      return 'User Not found'
    }

    return this.prismaService.user.update({
      where: {
        id
      },
      data: updateUserDto
    });
  }
}
