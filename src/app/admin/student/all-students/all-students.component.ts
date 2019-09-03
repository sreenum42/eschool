import {Component, OnInit} from '@angular/core';
import {AddstudentService} from '../../../providers/addstudent.service';
import {Student} from '../../../model/newstudent/AddStudent.model';
import {Router} from '@angular/router';

@Component({
  selector: 'es-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent implements OnInit {

  studentsList: Student[];
  searchText:string='';
  constructor(private addstudentService: AddstudentService, private router: Router) {
  }

  ngOnInit() {
    this.getAllStudentData();

  }


  getAllStudentData() {
    this.addstudentService.getAllStudents().subscribe(response => {
      //console.log(response);
      this.studentsList = response['data'];
    });
  }

   updateProfile(_student: Student) {
   //TODO find the better option then sending with queryParams and object is not working
    console.log('padma student' + _student);
    this.router.navigate(['admin/student/add-student'], /*{queryParams: {data: student}}*/);
    sessionStorage.setItem("student",JSON.stringify(_student));


  }



  deleteProfile(student: Student) {
     this.addstudentService.deleteStudent(student).subscribe(response => {
     this.getAllStudentData();

    });
  }
}
