import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseItem } from '../course-item';
import { CourseItemsService } from '../course-items.service';

@Component({
  	selector: 'app-add-edit-course',
  	templateUrl: './action-course-item.component.html',
  	styleUrls: ['./action-course-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionCourseItemComponent implements OnInit {
	constructor(private readonly router: Router,
				private readonly courseService: CourseItemsService,
				private readonly route: ActivatedRoute) { }
	@Input() public course: CourseItem;
	private static isNumber(value: string | number): boolean {
		return ((value != null) &&
			(value !== '') &&
			!isNaN(Number(value.toString())));
	}
	public ngOnInit(): void {
		const id: string = this.route.snapshot.paramMap.get('id');
		this.course = ActionCourseItemComponent.isNumber(id) ? this.courseService.getById(Number(id)) : new CourseItem();
	}
	public cancel(): void {
		this.router.navigate(['/courses']);
	}
	public save(): void {
		this.courseService.create(this.course);
		this.router.navigate(['/courses']);
	}
}
