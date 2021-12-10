import { Id } from '../../../core/types/id'

export interface Todo {
  userId: Id
  id: Id
  title: string
  completed: boolean
}
