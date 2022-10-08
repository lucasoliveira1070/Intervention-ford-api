import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "src/database/service/prisma.service";
import { UsersService } from "src/users/users.service";
import { CreateAchievementDTO } from "./dto/create-achievement";

@Injectable()
export class AchievementService {
    constructor(
        private prismaService: PrismaService) { }

    selectAchievementQuery = {
        id: true,
        title: true,
        description: true,
        reward: {
            select: {
                id: true,
                title: true,
                description: true,
                expiration: true
            }
        }

    }

    async findOne(id: string) {
        const achievement = await this.prismaService.achievement.findUnique({
            where: {
                id
            },
            select: this.selectAchievementQuery
        })

        if (!achievement) {
            throw new Error('Achievement not found')
        }

        return achievement;

    }

}