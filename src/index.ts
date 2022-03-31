import 'reflect-metadata'
import './core/di/container'
import { Runner } from './core/runner/runner'
import { TodosPage } from './features/todos/delivery/todos.page'
import { container } from './core/di/container'

Runner.build()
const todosPage = container.resolve(TodosPage)
todosPage.render()
