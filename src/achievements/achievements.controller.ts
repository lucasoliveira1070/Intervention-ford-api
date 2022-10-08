import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AchievementService } from "./achievements.service";
import { CreateAchievementDTO } from "./dto/create-achievement";

@Controller('achievements')
export class AchievementsController {
    constructor(private readonly achievementService: AchievementService) { }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.achievementService.findOne(id);
    }
}