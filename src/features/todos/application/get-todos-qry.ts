import { Query } from '../../../core/use-case/query'
import { Todo } from '../domain/todo'
import { inject, injectable } from 'tsyringe'
import { TODO_REPOSITORY } from '../../../core/di/injection-tokens'
import { TodoRepository } from '../domain/todo-repository'

@injectable()
export class GetTodosQry extends Query<Todo[]> {
  constructor(@inject(TODO_REPOSITORY) private readonly todoRepository: TodoRepository) {
    super()
  }

  async internalExecute(): Promise<Todo[]> {
    return this.todoRepository.findAll()
  }
}
