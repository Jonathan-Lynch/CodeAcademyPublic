import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  readonly URL = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private httpService: HttpClient) { }

  get() {
    return this.httpService.get<any>(this.URL);
  }
}
