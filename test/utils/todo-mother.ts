import { Todo } from '../../src/features/todos/domain/todo'

export class TodoMother {
  static completed(): Todo[] {
    return [
      {
        completed: true,
        id: 1,
        userId: 1,
        title: 'Aprender arquitectura',
      },
    ]
  }

  static all(): Todo[] {
    return [
      {
        completed: true,
        id: 1,
        userId: 1,
        title: 'Aprender arquitectura',
      },
      {
        completed: false,
        id: 2,
        userId: 1,
        title: 'Aprender Web3',
      },
      {
        completed: false,
        id: 3,
        userId: 1,
        title: 'Aplicar las 4 reglas del diseño simple',
      },
    ]
  }
}
