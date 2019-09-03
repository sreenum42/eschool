import { Component, OnInit } from '@angular/core';
import { CourseService } from "../../providers/course.service";
import {CourseDetailComponent} from './course-detail/course-detail.component';
@Component({
  selector: 'es-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [CourseService]
})
export class CourseComponent implements OnInit {

  courseResponse: any;
  constructor(private _courseService: CourseService) {
    console.log('[CourseComponent]');
    this.courseResponse = {};
  }

  ngOnInit() {
    this._courseService.getCourse().subscribe(
      (res) => {
        this.courseResponse = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
