import { GetCompletedTodosQry } from '../application/get-completed-todos-qry'
import { injectable } from 'tsyringe'
import { GetTodosQry } from '../application/get-todos-qry'
import { CompleteTodoCmd } from '../application/complete-todo-cmd'
import { Todo } from '../domain/todo'
import { UncompleteTodoCmd } from '../application/uncomplete-todo-cmd'

@injectable()
export class TodosPage {
  constructor(
    private readonly getCompletedTodosQry: GetCompletedTodosQry,
    private readonly getTodosQry: GetTodosQry,
    private readonly completeTodoCmd: CompleteTodoCmd,
    private readonly uncompleteTodoCmd: UncompleteTodoCmd,
  ) {}

  render() {
    document.getElementById('app').innerHTML = `
<main class="content">
  <h1>Guía del Arquitecto Galáctico</h1>
  <button id="get-todos">Ver todos</button>
  <button id="get-completed-todos">Ver todos completados</button>
  <div id="todos"></div>
</main>
`
    this.renderAllTodos()

    document.querySelector('#get-todos').addEventListener('click', () => this.renderAllTodos())
    document.querySelector('#get-completed-todos').addEventListener('click', () => this.renderCompletedTodos())
  }

  private async renderCompletedTodos() {
    const todosPageRendered = await this.completed()
    this.renderWithEvents(todosPageRendered)
  }

  private renderWithEvents(todosPageRendered: string) {
    document.querySelector('#todos').innerHTML = todosPageRendered
    this.setEvents()
  }

  private async renderAllTodos() {
    const todosPageRendered = await this.all()
    this.renderWithEvents(todosPageRendered)
  }

  private async all() {
    const todos = await this.getTodosQry.execute()
    return this.renderTodos(todos)
  }

  private async completed() {
    const todos = await this.getCompletedTodosQry.execute()
    return this.renderTodos(todos)
  }

  private renderTodos(todos: Todo[]) {
    return `<ul>${todos
      .map(
        x =>
          `<li class="todo ${x.completed && 'completed'}" data-id="${x.id}" data-completed="${x.completed}">${
            x.title
          }</li>`,
      )
      .join('')}<section>`
  }

  private setEvents() {
    document.querySelectorAll<HTMLLIElement>('.todo').forEach(x => {
      x.addEventListener('click', async () => {
        if (JSON.parse(x.dataset.completed)) {
          await this.uncompleteTodoCmd.execute(Number(x.dataset.id))
        } else {
          await this.completeTodoCmd.execute(Number(x.dataset.id))
        }
        this.render()
      })
    })
  }
}
