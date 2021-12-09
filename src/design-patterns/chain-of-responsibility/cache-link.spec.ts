import { CacheLink } from './cache-link'
import { Command } from '../command/command'

describe('CacheLink', () => {
  it('should call setNext once', async () => {
    const { cacheLink, command, nextLink } = setup()

    await cacheLink.next({ command })
    await cacheLink.next({ command })
    await cacheLink.next({ command })

    expect(nextLink.next).toHaveBeenCalledTimes(1)
  })
})

function setup() {
  const mockedCommand = jest.fn()
  class CommandMock implements Command {
    async execute(): Promise<void> {}
  }
  const command = new CommandMock()
  const nextLink = {
    next: jest.fn(),
    setNext: jest.fn(),
  }
  const cacheLink = new CacheLink()
  cacheLink.setNext(nextLink)
  return {
    mockedCommand,
    nextLink,
    command,
    cacheLink,
  }
}
