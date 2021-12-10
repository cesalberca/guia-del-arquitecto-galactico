import { GetCompletedTodosQry } from '../application/get-completed-todos-qry'
import { injectable } from 'tsyringe'

@injectable()
export class TodosPage {
  constructor(private readonly getCompletedTodosQry: GetCompletedTodosQry) {}

  async render() {
    const todos = await this.getCompletedTodosQry.execute()
    return `<section>${todos.map((x) => `<div>${x.title}</div>`)}<section>`
  }
}
