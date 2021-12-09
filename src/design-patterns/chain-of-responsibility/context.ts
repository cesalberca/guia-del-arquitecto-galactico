import { Command } from '../command/command'

type Unpromisify<T> = T extends Promise<infer R> ? R : T
type First<T> = T extends [infer U, ...unknown[]] ? U : void
type Options<T extends Command> = First<Parameters<T['execute']>>
type Result<T extends Command> = Unpromisify<ReturnType<T['execute']>>

export interface Context<
  S extends Command<Result<S>, Options<S>> = Command<unknown, unknown>
> {
  command: Command<Result<S>, Options<S>>
  result?: Result<S>
  options?: Options<S>
}
