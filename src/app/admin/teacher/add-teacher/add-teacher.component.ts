import { Component, OnInit } from '@angular/core';
import { Student } from '../../../model/newstudent/AddStudent.model';
import { AddstudentService } from '../../../providers/addstudent.service';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from '../../../model/teacher/Teacher.model';
import { TeacherService } from '../../../providers/teacher.service';

@Component({
  selector: 'es-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {
  teacher: Teacher;
  ressponseData: any;
  teacherId: string;
  formTitle: string;
  buttonTitle: string;
  teacherFileName: any;

  //base64s
  teacherImgString: string;
  gender: boolean;
  constructor(private teacherService: TeacherService, private activatedRouter: ActivatedRoute) {

    // activatedRouter.queryParams
    // debugger;
    console.log('queryparm value is ' + activatedRouter.queryParams);
    this.gender = false;
    this.ressponseData = {};
    this.teacher = new Teacher();
    this.buttonTitle = 'Submit';
    this.formTitle = 'Add New Teacher Information';
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(c => {
      this.teacherId = c["id"];
      console.log('[teacherId]', this.teacherId);
      if (this.teacherId) {
        this.getTeacherBy(this.teacherId);
        // this.teacher = JSON.parse(sessionStorage.getItem('teacher')) as Teacher;
        // sessionStorage.removeItem('teacher');
        this.buttonTitle = 'Update';
        this.formTitle = 'Update Information';
      }
    });

    this.teacher.status = true;
  }

  signupHandler() {
   // debugger;
 //  this.teacher.imgSrc = this.teacherImgString;
    this.teacher.userName = this.teacher.teacherEmail;
    this.teacher.role = 3;

    console.log(this.teacher);
    if (this.buttonTitle == 'Update') {
      // console.log('inside update sign handler ');
      // console.log(this.student);
      // console.log('after this.student ');
     // this.teacher.imgSrc = this.teacherImgString;
      this.teacherService.updateteacher(this.teacher).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    }
    else {
    
      this.teacherService.signup(this.teacher).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  getTeacherBy(id: string) {
    this.teacherService.getTeacherById(id).subscribe(
      (res) => {
        console.log(res);
        this.ressponseData = res;
        this.teacher = this.ressponseData.data;
      },
      (err) => {
        console.log(err);
      }
    );

  }
  public picked(event: any) {

    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.teacherFileName = file;
      this.handleInputChange(file); //turn into base64


    }
    else {
      alert("No file selected");
    }
  }


  handleInputChange(files: any) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    //this._handleReaderLoaded.bind(this);
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    //this.imageSrc = base64result;   
    this.teacher.imgSrc = base64result;


  }

}
