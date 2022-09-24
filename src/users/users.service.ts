import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/database/service/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) { }

  selectUserQuery = {
    id: true,
    name: true,
    password: true,
    achievements: {
      select: {
        id: true,
        title: true,
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
      throw new Error('User not found')
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
      throw new Error('User not found')
    }

    return this.prismaService.user.update({
      where: {
        id
      },
      data: updateUserDto
    });
  }
}
