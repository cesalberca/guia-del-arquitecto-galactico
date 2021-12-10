import { Command } from '../use-case/command'

type Unpromisify<T> = T extends Promise<infer R> ? R : T
type First<T> = T extends [infer U, ...unknown[]] ? U : void
type Param<T extends Command> = First<Parameters<T['execute']>>
type Result<T extends Command> = Unpromisify<ReturnType<T['execute']>>

export interface Context<
  S extends Command<Result<S>, Param<S>> = Command<unknown, unknown>
> {
  useCase: Command<Result<S>, Param<S>>
  result?: Result<S>
  param?: Param<S>
}
