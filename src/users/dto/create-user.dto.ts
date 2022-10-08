import { CreateAchievementDTO } from 'src/achievements/dto/create-achievement';
export class CreateUserDto {
  username:string;
  name: string;
  cpf: string;
  score: number;
  password: string;
  achievements: CreateAchievementDTO[];
}
