/* eslint-disable prettier/prettier */
import { CreateRewardDTO } from "src/rewards/dto/create-reward";
export class CreateAchievementDTO {
  title: string;
  descriprion: string;
  reward: CreateRewardDTO[];
}