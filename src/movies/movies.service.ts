import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [
    { id: 213122, title: 'title1', year: 20220303, generes: ['asd', 'asd'] },
    { id: 156522, title: 'title2', year: 20280912, generes: ['azx', 'das'] },
    { id: 674122, title: 'title3', year: 20091218, generes: ['zxc', 'xzv'] },
  ];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    // console.log(this.movies);
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found.`);
    }
    return movie;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
