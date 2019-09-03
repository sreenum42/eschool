import { Component, OnInit } from '@angular/core';
import {Teacher} from '../../model/teacher/Teacher.model';
import {TeacherService} from '../../providers/teacher.service';

@Component({
  selector: 'es-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public teacher: Teacher = new Teacher();

  constructor(private service: TeacherService) { }

  ngOnInit() {

    let teacherId = '5d177e8b7747cf83b86b6a71';
    this.service.getTeacherById(teacherId).subscribe(response => {
      this.teacher = response['data'];

    });

  }



}
