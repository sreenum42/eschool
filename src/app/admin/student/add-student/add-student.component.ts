import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../../model/newstudent/AddStudent.model';
import {AddstudentService} from '../../../providers/addstudent.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'es-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  student: Student = new Student();
  formTitle: string;
  buttonTitle: string;
  studentFileName: any;
  studentId: string;


  // tslint:disable-next-line:variable-name
  constructor(private _AddstudentService: AddstudentService, private activatedRouter: ActivatedRoute) {

    // activatedRouter.queryParams
    // debugger;
    console.log('queryparm value is ' + activatedRouter.queryParams);
  }

  ngOnInit() {

    this.activatedRouter.params.subscribe(c => {
      this.studentId = c['id'];
      console.log('[teacherId]', this.studentId);
      if (this.studentId) {
        this.getSudentBy(this.studentId);
        // this.teacher = JSON.parse(sessionStorage.getItem('teacher')) as Teacher;
        // sessionStorage.removeItem('teacher');
        this.buttonTitle = 'Update';
        this.formTitle = 'Update Information';
      } else {
        this.student = new Student();
        this.buttonTitle = 'Submit';
        this.formTitle = 'Add New Student Informations';
        this.student.Status = true;
      }
    });
  }


  getSudentBy(id: string) {
    this._AddstudentService.getStudentById(id).subscribe(
      (res) => {
        console.log(res);
        this.student = res['data'];
      },
      (err) => {
        console.log(err);
      }
    );

  }

  signupHandler() {

    if (this.buttonTitle == 'Update') {
      // console.log('inside update sign handler ');
      // console.log(this.student);
      // console.log('after this.student ');
      this._AddstudentService.updatestudent(this.student).subscribe(
        (res) => {
          console.log();
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this._AddstudentService.signup(this.student).subscribe(
        (res) => {
          console.log();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  picked(event: Event) {
    // @ts-ignore
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.studentFileName = file;
      this.handleInputChange(file); //turn into base64

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
    this.student.ImgSrc = base64result;


  }
}
