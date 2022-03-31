import { instance, mock, when } from 'ts-mockito'
import { TodoRepository } from '../domain/todo-repository'
import { TodoMother } from '../../../../test/utils/todo-mother'
import { GetTodosQry } from './get-todos-qry'

describe('GetTodosQry', () => {
  it('should get all todos', async () => {
    const { todoRepository, getCompletedTodosQry } = setup()
    when(todoRepository.findAll()).thenResolve(TodoMother.all())

    const todos = await getCompletedTodosQry.internalExecute()

    expect(todos).toEqual(TodoMother.all())
  })
})

function setup() {
  const todoRepository = mock<TodoRepository>()

  return {
    todoRepository,
    getCompletedTodosQry: new GetTodosQry(instance(todoRepository)),
  }
}
