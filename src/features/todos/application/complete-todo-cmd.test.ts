import { CompleteTodoCmd } from './complete-todo-cmd'
import { instance, mock, verify, when } from 'ts-mockito'
import { TodoRepository } from '../domain/todo-repository'

describe('CompleteTodoCmd', () => {
  it('should complete todo', async () => {
    const { todoRepository, completeTodoCmd } = setup()
    when(todoRepository.completeTodo(1)).thenResolve()

    await completeTodoCmd.internalExecute(1)

    verify(todoRepository.completeTodo(1)).once()
  })
})

function setup() {
  const todoRepository = mock<TodoRepository>()

  return {
    todoRepository,
    completeTodoCmd: new CompleteTodoCmd(instance(todoRepository)),
  }
}
