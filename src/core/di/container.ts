import { container } from 'tsyringe'
import { TODO_REPOSITORY, WINDOW } from './injection-tokens'
import { TodoHttpRepository } from '../../features/todos/infrastructure/todo-http-repository'
import { TodoRepository } from '../../features/todos/domain/todo-repository'

container.register<TodoRepository>(TODO_REPOSITORY, TodoHttpRepository)
container.registerInstance<Window>(WINDOW, window)

export { container }
