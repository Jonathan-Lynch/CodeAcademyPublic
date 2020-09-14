import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class MovieApiService {

  url = 'https://api.themoviedb.org/3/';

  constructor(private httpClient: HttpClient) { }


  async get(path: string, options?: any): Promise<any> {
    // https://api.themoviedb.org/3/earch/multi?query=star wars&api_key...
    return await this.httpClient.get(`${this.url}${path}&api_key=1b553eb4946f4f9519194100bbcaf342`, options)
      .toPromise();
  }
}
