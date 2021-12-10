import { TodoRepository } from '../domain/todo-repository'
import { Todo } from '../domain/todo'
import { inject, injectable } from 'tsyringe'
import { WINDOW } from '../../../core/di/injection-tokens'

@injectable()
export class TodoHttpRepository implements TodoRepository {
  constructor(@inject(WINDOW) private readonly window: Window) {}

  findAll(): Promise<Todo[]> {
    return this.window
      .fetch('https://jsonplaceholder.typicode.com/todos')
      .then((x) => x.json())
  }
}
