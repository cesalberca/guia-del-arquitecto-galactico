import { Todo } from '../../src/features/todos/domain/todo'

export class TodoMother {
  static completedTodos(): Todo[] {
    return [
      {
        completed: true,
        id: 1,
        userId: 1,
        title: 'Learn architecture',
      },
    ]
  }
}
