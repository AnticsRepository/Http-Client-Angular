import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';

@Injectable()

export class JokesService {

  readonly API_JOKES = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpService) { }

  public getJokes(): Observable<any> {
    return this.http.get(this.API_JOKES);
  }
}
