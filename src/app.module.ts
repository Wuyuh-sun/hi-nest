import { Module } from '@nestjs/common';
// import { MoviesController } from './movies/movies.controller';
// import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  // controllers: [MoviesController],
  // providers: [MoviesService],
})
export class AppModule {}
