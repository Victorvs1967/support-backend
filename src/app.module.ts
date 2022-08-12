import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramBotListenerService } from './features/telegram-bot';

@Module({
  imports: [],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
    TelegramBotListenerService,  
  ],
})
export class AppModule {
  constructor(public readonly telegramBotListener: TelegramBotListenerService) {}
}
