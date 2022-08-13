import { Module } from '@nestjs/common';
import { RoomController, RoomService, RoomState } from './room';
import { TelegramBotListenerService } from './telegram-bot';

@Module({
  imports: [
  ],
  controllers: [
    RoomController
  ],
  providers: [
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
