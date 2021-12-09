import { Link } from './link'
import { EmptyLink } from './empty-link'
import { Context } from './context'

export class ExecutorLink implements Link {
  private nextLink: Link = new EmptyLink()

  async next(context: Context) {
    context.result = await context.command.execute(context.options)
    this.nextLink.next(context)
  }

  setNext(link: Link) {
    this.nextLink = link
  }
}
