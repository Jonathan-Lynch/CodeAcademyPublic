import { Injectable, EventEmitter } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { Subject } from 'rxjs';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoId = 0;
  updated: Subject<any> = new Subject();

  todoList: ITodo[] = [
    // example of how to make an item in todo list
    {
      title: 'Install Angular CLI',
      id: this.todoId,
      status: Constants.Todo,
      createdAt: new Date(),
      description: ''
    },
    {
      title: 'Install Angular CLI',
      id: this.todoId,
      status: Constants.Doing,
      createdAt: new Date(),
      description: ''
    },
    {
      title: 'Install Angular CLI',
      id: this.todoId,
      status: Constants.Done,
      createdAt: new Date(),
      description: ''
    }
  ];

  statuses: string[] = [Constants.Todo, Constants.Doing, Constants.Done];

  constructor() {

   }

  getTodos(status?: string): ITodo[] {
    // if not truthy
    if (!status) {
      return this.todoList;
    }

    return this.todoList.filter(todo => todo.status === status);
  }

  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
    this.updated.next();
  }

  addTodo(todo: ITodo): void {
    todo.id = this.todoId++;
    this.todoList.push(todo);
    this.updated.next();
  }

  getStatuses(): string[] {
    return this.statuses;
  }

}
