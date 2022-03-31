import { Query } from '../../../core/use-case/query'
import { Todo } from '../domain/todo'
import { inject, injectable } from 'tsyringe'
import { TODO_REPOSITORY } from '../../../core/di/injection-tokens'
import { TodoRepository } from '../domain/todo-repository'
import { TodosFilter } from '../domain/todos-filter'

@injectable()
export class GetCompletedTodosQry extends Query<Todo[]> {
  constructor(
    @inject(TODO_REPOSITORY) private readonly todoRepository: TodoRepository,
    private readonly todosFilter: TodosFilter,
  ) {
    super()
  }

  async internalExecute(): Promise<Todo[]> {
    const todos = await this.todoRepository.findAll()
    return this.todosFilter.completed(todos)
  }
}
