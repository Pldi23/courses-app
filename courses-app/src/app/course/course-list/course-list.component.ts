import {HttpErrorResponse} from '@angular/common/http';
import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {of, Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {CourseItem} from '../course-item';
import {CourseItemsService} from '../course-items.service';

@Component({
	selector: 'app-courses-list',
	templateUrl: './course-list.component.html',
	styleUrls: ['./course-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent implements OnInit {

	public coursesList$: Observable<CourseItem[]>;
	@Input() public searchText: string;
	private arrLength: number;

	constructor(private readonly courseService: CourseItemsService) {
	}

	public ngOnInit(): void {
		this.coursesList$ = this.courseService
			.fetch(0, DEFAULT_LIST_SIZE, this.searchText)
			.pipe(this.setArrLength(), this.handleError());
	}

	public fetchMore(): void {
		this.coursesList$ = this.courseService
			.fetch(0, this.arrLength + DEFAULT_LIST_SIZE, this.searchText)
			.pipe(this.setArrLength(), this.handleError());
	}

	public search(): void {
		if (this.searchText != undefined) {
			this.coursesList$ = this.courseService
				.fetch(0, DEFAULT_LIST_SIZE, this.searchText)
				.pipe(this.setArrLength(), this.handleError());
		}
	}

	public handleDelete(course: CourseItem): void {
		this.coursesList$ = this.courseService.remove(course)
			.pipe(map((): any => {
				this.coursesList$ = this.courseService
					.fetch(0, DEFAULT_LIST_SIZE, this.searchText)
					.pipe(this.setArrLength(), this.handleError());
			}));
	}

	private handleError(): any {
		return catchError((err: HttpErrorResponse): Observable<CourseItem[]> => {
			Swal.fire(`Error`, err.message, 'error');
			return of([]);
		});
	}

	private setArrLength(): any {
		return tap((val: CourseItem[]): void => {
			this.arrLength = val.length;
		});
	}
}

const DEFAULT_LIST_SIZE: number = 3;
