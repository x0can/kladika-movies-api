import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { MovieGenre } from 'src/enums/enums';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  @IsNotEmpty()
  @IsEnum(MovieGenre)
  @ApiProperty({
    enum: MovieGenre,
    isArray: true,
    example: [MovieGenre.Action, MovieGenre.Comedy],
    description: 'genre',
  })
  genre: MovieGenre[];
}
