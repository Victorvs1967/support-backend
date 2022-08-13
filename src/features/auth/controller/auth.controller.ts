import { Body, Controller, Post } from "@nestjs/common";
import { Support, SupportCreationInfo, SupportServices } from '../../support';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly supportService: SupportServices,
  ) {}

  @Post('login')
  public login(): string {
    return 'login';
  }

  @Post('signup')
  public signup(@Body() supportCreationInfo: SupportCreationInfo): Support {
    
    return this.supportService.create(supportCreationInfo);
  }
}