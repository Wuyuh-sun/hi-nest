import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  // 배열이면 each true, 옵션값이면 IsOptional 사용
  @IsString({ each: true })
  @IsOptional()
  readonly generes: string[];
}
