import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICourse } from '../../models/models';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class CourseService {

  BASE_URL = 'http://localhost:8000/courses';
  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<any> {
    return this.httpClient.get<ICourse[]>(this.BASE_URL)
      .do(data => console.log('All ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  addCourse(courseName:string):Observable<any>{

    return this.httpClient.post(this.BASE_URL,{courseName:courseName})
    .do(data=>console.log("All "+JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.error.error);
  }




}
