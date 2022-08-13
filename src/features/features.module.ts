import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SharedModule } from '../shared.module';
import { AuthController } from './auth';
import { RoomController, RoomService, RoomRepository } from './room';
import { SupportController, SupportRepository, SupportServices } from './support';
import { TelegramBotListenerService } from './telegram-bot';

@Module({
  imports: [
    SharedModule,
  ],
  controllers: [
    RoomController,
    AuthController,
    SupportController,
  ],
  providers: [
    TelegramBotListenerService,
    RoomRepository,
    RoomService,  
    SupportServices,
    SupportRepository,
  ],
})
export class FeaturesModule {
  constructor(
    public readonly telegramBotListener: TelegramBotListenerService,
  ) { }
}
