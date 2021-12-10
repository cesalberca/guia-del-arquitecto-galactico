import { Runner } from '../runner/runner'

export abstract class UseCase<Param = void, Result = void> {
  readonly: boolean
  abstract internalExecute(param: Param): Promise<Result>

  async execute(param: Param): Promise<Result> {
    const value = (await Runner.run(this as any, param)) as Result
    return value
  }
}
