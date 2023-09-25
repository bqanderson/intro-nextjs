import { randomUUID } from 'crypto'

export class TodoItem {
  id: string
  createdAt: Date
  content?: string
  isCompleted: boolean

  constructor( todo: TodoItem ) {
    this.id = todo.id || randomUUID()
    this.createdAt = todo.createdAt || new Date()
    this.content = todo.content
    this.isCompleted = todo.isCompleted || false
  }
}
