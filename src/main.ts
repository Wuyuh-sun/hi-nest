import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //인풋 결과의 유효성 검사 하는 미들웨어
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // whitelist:true 일 경우 decorator가 없는 property는 거른다
      forbidNonWhitelisted: true, // forbidNonWhitelisted -> 엔티티 데코레이터에 없는 값 인입시 그 값에 대한 에러메세지 알려줌
      transform: true, // transform -> 컨트롤러가 값을 받을때 컨트롤러에 정의한 타입으로 형변환
    }),
  );
  await app.listen(8000);
}
bootstrap();
