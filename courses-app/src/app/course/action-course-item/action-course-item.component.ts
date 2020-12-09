import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthorItem } from '../author-item';
import { CourseItem } from '../course-item';
import { CourseItemsService } from '../course-items.service';

@Component({
	selector: 'app-add-edit-course',
	templateUrl: './action-course-item.component.html',
	styleUrls: ['./action-course-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionCourseItemComponent implements OnInit {
	@Input() public course$: Observable<CourseItem>;

	constructor(private readonly router: Router,
				private readonly courseService: CourseItemsService,
				private readonly route: ActivatedRoute) {
	}

	private static isNumber(value: string | number): boolean {
		return ((value != null) &&
			(value !== '') &&
			!isNaN(Number(value.toString())));
	}

	public ngOnInit(): void {
		const id: string = this.route.snapshot.paramMap.get('id');
		if (!ActionCourseItemComponent.isNumber(id)) {
			this.course$ = of(new CourseItem());
		} else {
			this.course$ = this.courseService.getById(Number(id))
				.pipe(
					tap((data: CourseItem): CourseItem => data),
					catchError((err: HttpErrorResponse): CourseItem => {
						this.router.navigate(['/courses']);
						Swal.fire(`Error`, err.message, 'error');
						return new CourseItem();
					}));
		}
	}

	public cancel(): void {
		this.router.navigate(['/courses']);
	}

	public save(course?: CourseItem): void {
		console.log(course);
		if (course.id === undefined) {
			this.course$ = this.courseService.create(course)
				.pipe(
					tap(this.handleUpsert(course, 'created')),
					catchError(this.handleError(course)));
		} else {
			this.course$ = this.courseService.update(course, course.id)
				.pipe(
					tap(this.handleUpsert(course, 'updated')),
					catchError(this.handleError(course)));
		}
	}

	private handleUpsert(course: CourseItem, info: string): any {
		return (): any => {
			this.router.navigate(['/courses']);
			Swal.fire(`${course.name}`, `Successfully ${info}!`, 'success');
		};
	}

	private handleError(course: CourseItem): any {
		return (err: HttpErrorResponse): CourseItem => {
			Swal.fire(`Could not save: ${course.name}`, err.message, 'error');
			return course;
		};
	}

	public loadDuration(duration: number, course: CourseItem): void {
		course.length = duration;
	}

	public loadDate(date: Date, course: CourseItem): void {
		course.date = date;
	}

	public loadAuthors(authors: AuthorItem[], course: CourseItem): void {
		course.authors = authors;
	}
}
