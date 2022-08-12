import { Message } from "src/features/message/models";
import { User } from "src/features/user/models";

export class Room {
  client: User;
  support: User;
  messages: Message[];
}