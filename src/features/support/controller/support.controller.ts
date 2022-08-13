import { Controller, Get } from "@nestjs/common";

@Controller('support')
export class SupportController {

  @Get('me')
  public getMe(): string {
    return 'me';
  }
}