import { Context } from './context'

export interface Link {
  setNext(link: Link): void
  next(context: Context): Promise<void>
}
