import { Link } from './link'

export class EmptyLink implements Link {
  async next() {}

  setNext(_link: Link) {}
}
