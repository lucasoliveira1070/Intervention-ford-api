/* eslint-disable prettier/prettier */
import { RewardDTO } from "src/rewards/dto/reward";
export class CreateAchievementDTO {
  title: string;
  icon: string;
  acquired: boolean;
  descriprion: string;
  reward: RewardDTO[];
}