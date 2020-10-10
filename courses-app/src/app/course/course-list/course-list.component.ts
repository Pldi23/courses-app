import { Component, OnInit } from '@angular/core';
import {CourseItem} from '../course-item';
import {CourseItemsService} from '../course-items.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {

  public coursesList: CourseItem[];

  constructor(private courseService: CourseItemsService) { }

  public ngOnInit(): void {
	this.coursesList = this.courseService.fetchAll();
  }

}
