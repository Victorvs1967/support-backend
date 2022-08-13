import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1 style="font-family: sans-serif;">Hello World!</h1>';
  }
}
