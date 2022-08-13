import { Module } from '@nestjs/common';
import { RoomService, RoomState } from './room';
import { TelegramBotListenerService } from './telegram-bot';

@Module({
  imports: [

  ],
  controllers: [
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
