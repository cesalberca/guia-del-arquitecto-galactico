import { Command } from './command'

export class CreateCarCommand implements Command<string> {
  async execute(): Promise<string> {
    return 'Hello'
  }
}
