import { ExecutorLink } from './executor-link'
import { EmptyLink } from './empty-link'
import { LoggerLink } from './logger-link'
import { Link } from './link'
import { Context } from './context'
import { UseCase } from '../use-case/use-case'

export class Runner {
  private static link: Link = new EmptyLink()

  static build() {
    const executorLink: Link = new ExecutorLink()
    const loggerLink: Link = new LoggerLink(console)
    const emptyLink: Link = new EmptyLink()
    executorLink.setNext(loggerLink)
    loggerLink.setNext(emptyLink)
    this.link = executorLink
  }

  static async run(useCase: UseCase<unknown, unknown>, param: unknown): Promise<unknown> {
    const context: Context<UseCase<unknown, unknown>> = {
      useCase,
      param: param,
    }
    await this.link.next(context)
    return context.result
  }
}
