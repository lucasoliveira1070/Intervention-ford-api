import { Module } from "@nestjs/common";
import { PrismaService } from "src/database/service/prisma.service";
import { RewardController } from "./rewards.controller";
import { RewardService } from "./rewards.service";

@Module({
    controllers:[RewardController],
    providers:[RewardService,PrismaService]
})
export class RewardModule{}