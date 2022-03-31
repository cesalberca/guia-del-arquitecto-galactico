import { UseCase } from './use-case'

export abstract class Command<Result = void, Options = void> extends UseCase<Result, Options> {
  readonly = false
}
