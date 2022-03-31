import { TodosFilter } from './todos-filter'
import { TodoMother } from '../../../../test/utils/todo-mother'
import { Todo } from './todo'

describe('TodosFilter', () => {
  it('should filter completed todos', () => {
    const todosFilter = new TodosFilter()

    const actual = todosFilter.completed(TodoMother.all())

    expect(actual).toEqual<Todo[]>(TodoMother.completed())
  })
})
