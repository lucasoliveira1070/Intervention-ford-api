import { Module } from '@nestjs/common';
import { AchievementModule } from './achievements/achievements.module';
import { DatabaseModule } from './database/database.module';
import { RewardModule } from './rewards/rewards.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    RewardModule,
    DatabaseModule,
    AchievementModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
