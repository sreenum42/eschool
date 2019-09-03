import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../model/newstudent/AddStudent.model';
import {Teacher} from '../model/teacher/Teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private _httpClient: HttpClient) {
  }

  signup(requestData: Teacher) {
    console.log('the request data is ');
    console.log(requestData);
    return this._httpClient.post('http://localhost:4200/api/addTeacher', requestData);
  }

  getAllTeacher() {
    return this._httpClient.get('http://localhost:4200/api/getAllTeacher');
  }
  getTeacherById(id:string) {
    return this._httpClient.get('http://localhost:4200/api/getTeacherById/'+id);
  }

  // deleteTeacher(_id: string) {
  //   return this._httpClient.post('http://localhost:4200/api/deleteTeacher', _id);

  // }

  updateteacher(requestData: Teacher) {
    // console.log("the request data is ");
    // console.log(requestData);
   return this._httpClient.post('http://localhost:4200/api/updateteacher', requestData);
}

  deleteTeacher(requestData: Teacher) {
    return this._httpClient.post('http://localhost:4200/api/deleteTeacher',requestData);
}
}
