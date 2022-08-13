import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as TelegramBot from 'node-telegram-bot-api'

import { EnvConfigKeyEnum } from 'src/core';
import { RoomService } from 'src/features/room';

@Injectable()
export class TelegramBotListenerService {
  private botInstance: TelegramBot;

  constructor(
    private readonly config: ConfigService,
    private readonly roomService: RoomService,
  ) {
    this.initBotInstance();
    this.initUserMessagesObserver();
  }

  private initBotInstance(): void {
    const token = this.config.get(EnvConfigKeyEnum.BotToken);
    this.botInstance = new TelegramBot(token, { polling: true });
  }

  private initUserMessagesObserver(): void {
    this.botInstance.on('message', telegramMessage => {
      this.roomService.create(telegramMessage);
    });
  }
}