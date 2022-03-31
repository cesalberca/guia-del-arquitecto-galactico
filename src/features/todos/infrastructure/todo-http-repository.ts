import { TodoRepository } from '../domain/todo-repository'
import { Todo } from '../domain/todo'
import { inject, injectable } from 'tsyringe'
import { GLOBAL } from '../../../core/di/injection-tokens'

@injectable()
export class TodoHttpRepository implements TodoRepository {
  constructor(@inject(GLOBAL) private readonly global: typeof globalThis) {}

  findAll(): Promise<Todo[]> {
    return this.global.fetch('https://jsonplaceholder.typicode.com/todos').then(x => x.json())
  }
}
