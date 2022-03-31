import { TodoHttpRepository } from './todo-http-repository'
import { instance, mock, when } from 'ts-mockito'
import { TodoMother } from '../../../../test/utils/todo-mother'
import { Todo } from '../domain/todo'

describe('TodoHttpRepository', () => {
  it('should fetch todos from API', async () => {
    const { response, global, todoHttpRepository } = setup()
    when(response.json()).thenResolve(TodoMother.all())
    when(global.fetch('https://jsonplaceholder.typicode.com/todos')).thenResolve(instance(response))

    const actual = await todoHttpRepository.findAll()

    expect(actual).toEqual<Todo[]>(TodoMother.all())
  })
})

function setup() {
  const global = mock<typeof globalThis>()
  const response = mock<Response>()

  return {
    response,
    global,
    todoHttpRepository: new TodoHttpRepository(instance(global)),
  }
}
