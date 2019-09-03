import { Injectable } from '@angular/core';
// step 1
import { HttpClient } from "@angular/common/http";
// step 2 // need some essential files
import { throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";


@Injectable()
export class CourseService {

  constructor(private _httpClient: HttpClient) { }

  // it is a publisher method which is return observable to the subscriber
  getCourse() {
    return this._httpClient.get('http://localhost:4200/api/courses').pipe(
      map((res) => {
        return res;
      }),
      catchError((e: Response) => throwError(e))
    );
  }
}
