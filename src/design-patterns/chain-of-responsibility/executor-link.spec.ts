import { ExecutorLink } from './executor-link'
import { Command } from '../command/command'
import { Context } from './context'
import { anything, instance, mock, verify, when } from 'ts-mockito'

describe('ExecutorLink', () => {
  it('should execute a given command', async () => {
    const { executorLink, commandMock, command } = setup()
    when(commandMock.execute(anything())).thenResolve()

    await executorLink.next({ command })

    verify(commandMock.execute(anything())).once()
  })

  it('should execute a given command with parameters', async () => {
    const { executorLink, commandMock, command } = setup()
    when(commandMock.execute(anything())).thenResolve()

    await executorLink.next({ command, options: 42 })

    verify(commandMock.execute(42)).once()
  })

  it('should set the result', async () => {
    const { executorLink, command, commandMock } = setup()
    when(commandMock.execute(anything())).thenResolve(42)
    const context: Context = { command }

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
