import { Message } from "src/features/message";
import { User } from "src/features/user";

export class Room {
  client: User;
  support: User | null = null;
  messages: Message[];
}