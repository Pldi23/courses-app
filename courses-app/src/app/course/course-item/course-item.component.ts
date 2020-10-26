import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseItem } from '../course-item';

@Component({
  	selector: 'app-courses-item',
  	templateUrl: './course-item.component.html',
  	styleUrls: ['./course-item.component.css'],
})
export class CourseItemComponent implements OnInit {

	@Input() public courseItem: CourseItem;
	@Output() public  delete: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();

	constructor() { }

	public ngOnInit(): void {
	}
	public edit(): void {
		console.log('edit clicked');
	}

}
