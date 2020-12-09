import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CourseItem } from '../course-item';

@Component({
  	selector: 'app-courses-item',
  	templateUrl: './course-item.component.html',
  	styleUrls: ['./course-item.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent implements OnInit {

	@Input() public courseItem: CourseItem;
	@Output() public  delete: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();
	public modalIsShown: boolean;

	constructor(private readonly router: Router) { }

	public ngOnInit(): void {
		this.modalIsShown = false;
	}
	public edit(): void {
		this.router.navigate([`/courses/${this.courseItem.id}`]);
	}

	public showDialog(): void {
		this.modalIsShown = true;
	}
	public closeDialog(): void {
		this.modalIsShown = false;
	}

}
