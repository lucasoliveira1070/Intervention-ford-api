import { Controller, Get, Param } from "@nestjs/common";
import { AchievementService } from "./achievements.service";

@Controller('achievements')
export class AchievementsController {
    constructor(private readonly achievementService: AchievementService) { }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.achievementService.findOne(id);
    }
}