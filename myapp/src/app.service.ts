import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getOtherHello() : string{
    return "Iras, si funciona!";
  }
}
