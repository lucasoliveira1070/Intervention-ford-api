import { Module } from "@nestjs/common";
import { PrismaService } from "src/database/service/prisma.service";
import { AchievementsController } from "./achievements.controller";
import { AchievementService } from "./achievements.service";

@Module({
    controllers: [AchievementsController],
    providers: [AchievementService,PrismaService]
})

export class AchievementModule { }