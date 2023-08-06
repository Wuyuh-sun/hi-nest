import { IsString, IsNumber } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  // 배열이면 each true, 옵션값이면 IsOptional 사용
  @IsString({ each: true })
  readonly generes: string[];
}
