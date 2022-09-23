import { CreateAchievementDTO } from 'src/achievements/dto/create-achievement';
export class CreateUserDto {
  name: string;
  password: string;
  achievements: CreateAchievementDTO[];
}
