import { Controller, Get, Body, Param } from '@nestjs/common';
import { RewardService } from './rewards.service';

@Controller('rewards')
export class RewardController {
    constructor(private readonly rewardService: RewardService) { }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.rewardService.findOne(id);
    }
}