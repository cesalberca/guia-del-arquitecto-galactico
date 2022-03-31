import { GetCompletedTodosQry } from './get-completed-todos-qry'
import { instance, mock, when } from 'ts-mockito'
import { TodosFilter } from '../domain/todos-filter'
import { TodoRepository } from '../domain/todo-repository'
import { TodoMother } from '../../../../test/utils/todo-mother'

describe('GetCompletedTodosQry', () => {
  it('should get completed todos', async () => {
    const { todosFilter, todoRepository, getCompletedTodosQry } = setup()
    const allTodos = TodoMother.all()
    when(todoRepository.findAll()).thenResolve(allTodos)
    when(todosFilter.completed(allTodos)).thenReturn(TodoMother.completed())

    const todos = await getCompletedTodosQry.internalExecute()

    expect(todos).toEqual(TodoMother.completed())
  })
})

function setup() {
  const todosFilter = mock<TodosFilter>()
  const todoRepository = mock<TodoRepository>()

  return {
    todosFilter,
    todoRepository,
    getCompletedTodosQry: new GetCompletedTodosQry(instance(todoRepository), instance(todosFilter)),
  }
}
