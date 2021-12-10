import 'reflect-metadata'
import './core/di/container'
import { Runner } from './core/runner/runner'
import { TodosPage } from './features/todos/delivery/todos.page'
import { container } from './core/di/container'

async function render() {
  document.getElementById('app').innerHTML = `
<main class="content">
  <h1>Guía del arquitecto galáctico</h1>
  <button id="get-completed-todos">Ver todos completados</button>
  <div id="todos"></div>
</main>
`

  Runner.build()
  const todosPage = container.resolve(TodosPage)

  document
    .querySelector('#get-completed-todos')
    .addEventListener('click', async () => {
      const todosPageRendered = await todosPage.render()
      document.querySelector('#todos').innerHTML = todosPageRendered
    })
}

render()
