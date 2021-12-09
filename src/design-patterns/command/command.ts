// Command decouples the object that invokes the operation from the one that knows how to perform it.
export interface Command<Result = void, Options = void> {
  execute(options: Options): Promise<Result>
}
