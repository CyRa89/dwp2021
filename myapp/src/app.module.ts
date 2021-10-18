import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person/person.module';
import { AuthorModule } from './author/author.module';
import { AuthorBookModule } from './author-book/author-book.module';
import { LoanModule } from './loan/loan.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
 /*       "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": "r0b3rt0l",*/

        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "dwp2021",
        "password": "mipasswordbiendificilote",
        "database": "dwp2021",
        "entities": ["dist/**/*.entity{.ts,.js}"],
        "synchronize": true
    }),
    TestModule, 
    BookModule, PersonModule, AuthorModule, AuthorBookModule, LoanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
