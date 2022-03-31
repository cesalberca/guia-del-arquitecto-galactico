import { ExecutorLink } from './executor-link'
import { Command } from '../use-case/command'
import { Context } from './context'
import { anything, instance, mock, verify, when } from 'ts-mockito'

describe('ExecutorLink', () => {
  it('should execute a given use-case', async () => {
    const { executorLink, commandMock, command } = setup()
    when(commandMock.execute(anything())).thenResolve()

    await executorLink.next({ useCase: command })

    verify(commandMock.internalExecute(anything())).once()
  })

  it('should execute a given use-case with parameters', async () => {
    const { executorLink, commandMock, command } = setup()
    when(commandMock.execute(anything())).thenResolve()

    await executorLink.next({ useCase: command, param: 42 })

    verify(commandMock.internalExecute(42)).once()
  })

  it('should set the result', async () => {
    const { executorLink, command, commandMock } = setup()
    when(commandMock.internalExecute(anything())).thenResolve(42)
    const context: Context = { useCase: command }

    await executorLink.next(context)

    expect(context.result).toBe(42)
  })
})

function setup() {
  const command = mock<Command<unknown, unknown>>()
  when(command.execute(anything())).thenResolve()
  return {
    command: instance(command),
    commandMock: command,
    executorLink: new ExecutorLink(),
  }
}
