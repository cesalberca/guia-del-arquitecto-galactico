import { Todo } from './todo'
import { Id } from '../../../core/types/id'

export interface TodoRepository {
  findAll(): Promise<Todo[]>
  completeTodo(id: Id): Promise<void>
  uncompleteTodo(id: Id): Promise<void>
}
