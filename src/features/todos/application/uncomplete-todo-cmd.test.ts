import { instance, mock, verify, when } from 'ts-mockito'
import { TodoRepository } from '../domain/todo-repository'
import { UncompleteTodoCmd } from './uncomplete-todo-cmd'

describe('UncompleteTodoCmd', () => {
  it('should uncomplete todo', async () => {
    const { todoRepository, uncompleteTodoCmd } = setup()
    when(todoRepository.uncompleteTodo(1)).thenResolve()

    await uncompleteTodoCmd.internalExecute(1)

    verify(todoRepository.uncompleteTodo(1)).once()
  })
})

function setup() {
  const todoRepository = mock<TodoRepository>()

  return {
    todoRepository,
    uncompleteTodoCmd: new UncompleteTodoCmd(instance(todoRepository)),
  }
}
