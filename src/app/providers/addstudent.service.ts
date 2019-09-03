
import { Injectable } from '@angular/core';

// step 1
import { HttpClient } from "@angular/common/http";
// step 2 // need some essential files
import { throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

import{Student} from '../model/newstudent/AddStudent.model';

@Injectable()
export class AddstudentService {

  constructor(private _httpClient: HttpClient) { }

  signup(requestData: Student) {
    //  console.log("the request data is ");
    //  console.log(requestData);
     return this._httpClient.post('http://localhost:4200/api/addstudent', requestData);
  }



  getAllStudents() {
    return this._httpClient.get('http://localhost:4200/api/getAllStudent');
  }

  deleteStudent(requestData: Student) {
       return this._httpClient.post('http://localhost:4200/api/deleteStudent',requestData);
  }
  // updatestudent(_id: string) {
  //   return this._httpClient.post('http://localhost:4200/api/updatestudent',_id);

  // }


  updatestudent(requestData: Student) {
      // console.log("the request data is ");
      // console.log(requestData);
     return this._httpClient.post('http://localhost:4200/api/updatestudent', requestData);
  }

  getStudentById(id: string) {
    return this._httpClient.get('http://localhost:4200/api/getStudentById/'+id);

  }
}
