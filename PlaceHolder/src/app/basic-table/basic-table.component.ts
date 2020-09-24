import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];
  dataSource: MatTableDataSource<any>;
  loading = true;
  originalFilter: (data: any, filter: string) => boolean;
  dataSub: Subscription;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true})sort: MatSort;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.dataSub = this.todoService.get().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loading = false;
      this.originalFilter = this.dataSource.filterPredicate;
    });
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
  }

  applyFilter(value) {
    this.dataSource.filter = value;
  }

  buttonToggle(event: MatButtonToggleChange ) {

    switch (event.value) {
      case 'id':
        this.dataSource.filterPredicate = this.filterById;
        break;
      case 'userId':
        this.dataSource.filterPredicate = this.filterByUserId;
        break;
      default:
        this.dataSource.filterPredicate = this.originalFilter;
        break;
    }
  }

  private filterById(data: any, filter: string) {
    return !filter || data.id === +filter;
  }

  private filterByUserId(data: any, filter: string) {
    return !filter || data.userId === +filter;
  }
}
