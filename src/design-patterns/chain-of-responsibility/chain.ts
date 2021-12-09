import { ExecutorLink } from './executor-link'
import { EmptyLink } from './empty-link'
import { LoggerLink } from './logger-link'
import { CacheLink } from './cache-link'
import { Link } from './link'
import { Context } from './context'
import { CreateCarCommand } from '../command/create-car-command'
import { Logger } from './logger'

export class Chain {
  private firstLink: Link = new EmptyLink()

  constructor(private readonly logger: Logger) {}

  build(): this {
    const cacheLink: Link = new CacheLink()
    const executorLink: Link = new ExecutorLink()
    const loggerLink: Link = new LoggerLink(this.logger)
    const emptyLink: Link = new EmptyLink()
    cacheLink.setNext(executorLink)
    executorLink.setNext(loggerLink)
    loggerLink.setNext(emptyLink)
    this.firstLink = cacheLink
    return this
  }

  async run(): Promise<string> {
    const context: Context<CreateCarCommand> = {
      command: new CreateCarCommand(),
    }
    await this.firstLink.next(context)
    return context.result
  }
}
