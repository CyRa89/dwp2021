import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getHello2() : string{
    return this.appService.getOtherHello();
  }

  @Put()
  getHello3() : string {
    return "a traves del put";
  }

  @Delete()
  getHello4() : string {
    return "a traves del delete";
  }
}
