import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = [
    'title',
    'description',
    'status',
    'createdAt'
  ];

  dataSource: MatTableDataSource<ITodo>;
  itemAddedSubscription: Subscription;
  @ViewChild('table', {static: true})table: MatTable<ITodo>;
  @ViewChild(MatSort, {static: true})sort: MatSort;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.todoService.getTodos());
    this.dataSource.sort = this.sort;
    this.itemAddedSubscription = this.todoService.updated.subscribe(() => this.updated());
  }

  ngOnDestroy() {
    this.itemAddedSubscription.unsubscribe();
  }

  updated() {
    this.dataSource.sort = null;
    this.table.renderRows();
    this.dataSource.sort = this.sort;
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter.trim().toLowerCase();
  }

}
