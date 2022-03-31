import { container } from 'tsyringe'
import { GLOBAL, TODO_REPOSITORY } from './injection-tokens'
import { TodoRepository } from '../../features/todos/domain/todo-repository'
import { TodoFakeRepository } from '../../features/todos/infrastructure/todo-fake-repository'

container.registerSingleton<TodoRepository>(TODO_REPOSITORY, TodoFakeRepository)
container.registerInstance<typeof globalThis>(GLOBAL, window)

export { container }
