import { TodoRepository } from '../domain/todo-repository'
import { Todo } from '../domain/todo'
import { injectable } from 'tsyringe'
import { TodoMother } from '../../../../test/utils/todo-mother'

@injectable()
export class TodoFakeRepository implements TodoRepository {
  async findAll(): Promise<Todo[]> {
    return TodoMother.all()
  }
}
