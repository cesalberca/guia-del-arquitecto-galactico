import { LoggerLink } from './logger-link'
import { mockDate, RealDate } from '../../../test/utils/mock-date'
import { Command } from '../use-case/command'
import { capture, instance, mock } from 'ts-mockito'
import { Logger } from './logger'

describe('LoggerLink', () => {
  beforeAll(() => {
    mockDate('2019-04-15:13:00:00Z')
  })

  afterAll(() => {
    global.Date = RealDate
  })

  it('should log a use-case', async () => {
    const { logger, loggerLink, command } = setup()

    await loggerLink.next({
      useCase: command,
      result: 42,
    })

    const [message] = capture(logger.log).last()
    expect(message).toEqual('2019-04-15T13:00:00.000Z - Object - 42')
  })
})

function setup() {
  const logger = mock<Logger>()
  const command = mock<Command>()
  return {
    logger,
    loggerLink: new LoggerLink(instance(logger)),
    command: instance(command),
  }
}
