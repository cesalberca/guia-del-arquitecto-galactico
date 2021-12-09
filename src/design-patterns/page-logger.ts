import { Logger } from './chain-of-responsibility/logger'

export class PageLogger implements Logger {
  constructor(
    private readonly window: Window,
    private readonly selector: string
  ) {}

  log(message: string) {
    const newChild = this.window.document.createElement('p')
    newChild.innerText = message
    this.window.document.querySelector(this.selector).appendChild(newChild)
  }
}
