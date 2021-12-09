import { Link } from './link'
import { EmptyLink } from './empty-link'
import { Context } from './context'

export class CacheLink implements Link {
  private nextLink: Link = new EmptyLink()
  private readonly cache = new Map<string, unknown>()

  async next(context: Context) {
    const key = context.command.constructor.name
    if (this.cache.has(key)) {
      context.result = this.cache.get(key)
      this.setNext(new EmptyLink())
      this.nextLink.next(context)
    } else {
      await this.nextLink.next(context)
      this.cache.set(key, context.result)
    }
  }

  setNext(link: Link) {
    this.nextLink = link
  }
}
