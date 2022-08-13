import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SharedModule } from '../shared.module';
import { RoomController, RoomService, RoomState } from './room';
import { TelegramBotListenerService } from './telegram-bot';

@Module({
  imports: [
    SharedModule,
  ],
  controllers: [
    RoomController
  ],
  providers: [
    ConfigService,
    TelegramBotListenerService,
    RoomState,
    RoomService,  
  ],
})
export class FeaturesModule {
  constructor(
    public readonly telegramBotListener: TelegramBotListenerService,
  ) { }
}
