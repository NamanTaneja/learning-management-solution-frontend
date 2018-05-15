import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TeacherService {
  BASE_URL='http://localhost:8000/teachers'
  constructor(private httpClient:HttpClient) { }

  getTeachers():Observable<any>{
    return this.httpClient.get(this.BASE_URL)
     .do(data => console.log('All ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.error);
    return Observable.throw(err.error.error);
  }
}
