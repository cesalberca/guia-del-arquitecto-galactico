import { inject, injectable } from 'tsyringe'
import { TODO_REPOSITORY } from '../../../core/di/injection-tokens'
import { TodoRepository } from '../domain/todo-repository'
import { Command } from '../../../core/use-case/command'
import { Id } from '../../../core/types/id'

@injectable()
export class UncompleteTodoCmd extends Command<Id> {
  constructor(@inject(TODO_REPOSITORY) private readonly todoRepository: TodoRepository) {
    super()
  }

  async internalExecute(id: Id): Promise<void> {
    return this.todoRepository.uncompleteTodo(id)
  }
}
