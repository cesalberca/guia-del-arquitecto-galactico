import { TodoRepository } from '../domain/todo-repository'
import { Todo } from '../domain/todo'
import { injectable } from 'tsyringe'
import { TodoMother } from '../../../../test/utils/todo-mother'
import { Id } from '../../../core/types/id'

@injectable()
export class TodoFakeRepository implements TodoRepository {
  todos = TodoMother.all()

  async findAll(): Promise<Todo[]> {
    return this.todos
  }

  async completeTodo(id: Id): Promise<void> {
    this.todos = this.todos.map(x => ({
      ...x,
      completed: x.id === id ? true : x.completed,
    }))
  }

  async uncompleteTodo(id: Id): Promise<void> {
    this.todos = this.todos.map(x => ({
      ...x,
      completed: x.id === id ? false : x.completed,
    }))
  }
}
