import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';

// export class UpdateMovieDto {
//   @IsString()
//   readonly title?: string;
//   @IsNumber()
//   readonly year?: number;
//   // 배열이면 each true, 옵션값이면 IsOptional 사용
//   @IsString({ each: true })
//   readonly generes?: string[];
// }
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
