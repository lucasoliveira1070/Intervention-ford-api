import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/service/prisma.service";

@Injectable()
export class RewardService {
    constructor(private prismaService: PrismaService) { }

    selectRewardQuery = {
        id: true,
        title: true,
        description: true,
        expiration: true,
        sponsor:true
    }

    async findOne(id: string) {
        const reward = await this.prismaService.reward.findUnique({
            where: {
                achievementID: id
            },
            select: this.selectRewardQuery
        });

        if (!reward) {
            throw new Error('Reward not found')
        }

        return reward;
    }
}