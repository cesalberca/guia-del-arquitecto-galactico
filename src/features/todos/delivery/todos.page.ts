import { GetCompletedTodosQry } from '../application/get-completed-todos-qry'
import { injectable } from 'tsyringe'

@injectable()
export class TodosPage {
  constructor(private readonly getCompletedTodosQry: GetCompletedTodosQry) {}

  async render() {
    const todos = await this.getCompletedTodosQry.execute()
    return `<ul class="todos">${todos.map((x) => `<li class="todo">${x.title}</li>`).join('')}<section>`
  }
}
