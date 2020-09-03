import { Component, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';
import { Constants } from '../constants';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-board',
  templateUrl: './drag-drop-board.component.html',
  styleUrls: ['./drag-drop-board.component.css']
})
export class DragDropBoardComponent implements OnInit {

  todos: ITodo[] = [];
  doing: ITodo[] = [];
  done: ITodo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos(Constants.Todo);
    this.doing = this.todoService.getTodos(Constants.Doing);
    this.done = this.todoService.getTodos(Constants.Done);
  }

  get todoList(): ITodo[] {
    const todos = this.todoService.getTodos(Constants.Todo);

    if (todos.length !== this.todos.length) {
      this.todos = todos;
    }
    return this.todos;
  }

  get doingList(): ITodo[] {
    const doings = this.todoService.getTodos(Constants.Doing);

    if (doings.length !== this.doing.length) {
      this.doing = doings;
    }
    return this.doing;
  }

  get doneList(): ITodo[] {
    const dones = this.todoService.getTodos(Constants.Done);

    if (dones.length !== this.done.length) {
      this.done = dones;
    }

    return this.done;
  }

  drop(event: CdkDragDrop<ITodo[]>): void {
    if (event.container === event.previousContainer) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

  }
}
