import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './service/prisma.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [PrismaService],
  exports: [PrismaService]
})
export class DatabaseModule {}
