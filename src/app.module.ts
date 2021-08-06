import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import BookController from './controllers/book.controller';
import Book from './model/book';
import BookService from './services/bookService';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Book])
  ],
  controllers: [AppController, BookController],
  providers: [AppService, BookService],
})
export class AppModule {}
