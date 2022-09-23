/* eslint-disable prettier/prettier */
import { RewardDTO } from "src/rewards/dto/reward";
export class CreateAchievementDTO {
  title: string;
  descriprion: string;
  reward: RewardDTO[];
}