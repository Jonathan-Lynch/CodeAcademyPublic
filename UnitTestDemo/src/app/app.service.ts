import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public add(x: number, y: number): number {
    return x + y;
  }

  public divide(x: number, y: number): number {
    if (y === 0) {
      throw Error('cannot divide by zero');
    }

    return x / y;
  }
}
