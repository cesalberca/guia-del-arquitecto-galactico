import { injectable } from 'tsyringe'
import { Todo } from './todo'

@injectable()
export class TodosFilter {
  completed(todos: Todo[]) {
    return todos.filter(x => x.completed)
  }
}
