import {Component, OnInit} from '@angular/core';
import {TeacherModule} from './teacher.module';
import {TeacherService} from '../providers/teacher.service';
import {Teacher} from '../model/teacher/Teacher.model';
import {FooterComponent} from '../footer/footer.component';
@Component({
  selector: 'es-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  public teacher: Teacher = new Teacher();

  constructor(private service: TeacherService) {
  }

  ngOnInit() {

    //TO DO get the teacher info once login and set here teacher object

    const teacherId = '5d177e8b7747cf83b86b6a71';
    this.service.getTeacherById(teacherId).subscribe(response => {
      this.teacher = response['data'];

    });
  }

}
