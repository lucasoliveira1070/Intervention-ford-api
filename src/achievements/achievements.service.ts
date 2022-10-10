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
        acquired: true,
        color: true,
        icon: true,
        route: true,
        imagePath: true,
        nextStep:true

    }

    async findAllFromUser(id: string) {
        return await this.prismaService.achievement.findMany({
            where: {
                userId: id
            },
            orderBy: [{
                acquired: 'desc'
            }, {
                title: 'desc'
            }],
            select: this.selectAchievementQuery
        })
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