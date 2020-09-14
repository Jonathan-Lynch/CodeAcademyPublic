import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class ApiService {

  private readonly URL = 'https://ce-authenticated-backend.herokuapp.com/';

  constructor(private httpClient: HttpClient) { }

  async get(path: string, options?: any): Promise<any> {
    return await this.httpClient.get(this.URL + path, options)
      .toPromise();
  }

  async post(path: string, data: any, options?: any): Promise<any> {

    return await this.httpClient.post(this.URL + path, data, options).toPromise();
  }
}
