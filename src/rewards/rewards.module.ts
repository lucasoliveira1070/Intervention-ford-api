import { Module } from "@nestjs/common";
import { RewardController } from "./rewards.controller";
import { RewardService } from "./rewards.service";

@Module({
    controllers:[RewardController],
    providers:[RewardService]
})
export class RewardModule{}