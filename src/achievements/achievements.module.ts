import { Module } from "@nestjs/common";
import { AchievementsController } from "./achievements.controller";
import { AchievementService } from "./achievements.service";

@Module({
    controllers: [AchievementsController],
    providers: [AchievementService]
})

export class AchievementModule { }