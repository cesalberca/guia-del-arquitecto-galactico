import { TodoRepository } from '../domain/todo-repository'
import { Todo } from '../domain/todo'
import { inject, injectable } from 'tsyringe'
import { GLOBAL } from '../../../core/di/injection-tokens'
import { GlobalThis } from '../../../core/types/global-this'

@injectable()
export class TodoHttpRepository implements TodoRepository {
  constructor(@inject(GLOBAL) private readonly globalThis: GlobalThis) {}

  findAll(): Promise<Todo[]> {
    return this.globalThis.fetch('https://jsonplaceholder.typicode.com/todos').then(x => x.json())
  }
}
