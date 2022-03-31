import { Todo } from '../../src/features/todos/domain/todo'

export class TodoMother {
  static completed(): Todo[] {
    return [
      {
        completed: true,
        id: 1,
        userId: 1,
        title: 'Learn architecture',
      },
    ]
  }

  static all(): Todo[] {
    return [
      {
        completed: true,
        id: 1,
        userId: 1,
        title: 'Learn architecture',
      },
      {
        completed: false,
        id: 2,
        userId: 1,
        title: 'Learn Web3',
      },
    ]
  }
}
