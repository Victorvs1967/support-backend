import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api'

@Injectable()
export class TelegramBotListenerService {
  private readonly botToken = '5557017123:AAEGrXmbbcWRzfNTtQeJ6-ca8vDkDPBW_Z4';
  private readonly botInstance: TelegramBot;

  constructor() {
    this.botInstance = new TelegramBot(this.botToken, { polling: true });
    this.initUserMessageObserver();
  }

  private initUserMessageObserver(): void {
    this.botInstance.on('message', message => console.log(message));
  }
}