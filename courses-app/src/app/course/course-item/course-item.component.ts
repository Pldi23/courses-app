import {Component, Input, OnInit} from '@angular/core';
import {CourseItem} from '../course-item';

@Component({
  selector: 'app-courses-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
})
export class CourseItemComponent implements OnInit {

  @Input() public courseItem: CourseItem;

  constructor() { }

  public ngOnInit(): void {
  }

}
