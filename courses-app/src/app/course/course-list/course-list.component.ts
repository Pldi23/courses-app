import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { of, BehaviorSubject, Observable } from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, tap} from 'rxjs/operators';
import Swal from 'sweetalert2';
import { CourseItem } from '../course-item';
import { CourseItemsService } from '../course-items.service';

@Component({
	selector: 'app-courses-list',
	templateUrl: './course-list.component.html',
	styleUrls: ['./course-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent implements OnInit {

	public coursesList$: Observable<CourseItem[]>;
	@Input() public searchText: string;
	public arrLength: number = 0;
	public state: BehaviorSubject<any> = new BehaviorSubject({
		count: DEFAULT_LIST_SIZE,
		isSearch: false,
		text: '',
	});

	constructor(private readonly courseService: CourseItemsService) {
	}

	public ngOnInit(): void {
		this.coursesList$ = this.state.pipe(
			filter((state: any): boolean => !state.isSearch || state.text.length > FILTER_LIMIT),
			debounceTime(DEBOUNCE_TIME),
			distinctUntilChanged(),
			switchMap((state: any): Observable<CourseItem[]> => {
				return this.courseService
						.fetch(0, state.count, state.text)
						.pipe(this.setArrLength(), this.handleError());
			}));
	}

	public fetchMore(): void {
		this.state.next({
			count: this.arrLength + DEFAULT_LIST_SIZE,
			isSearch: this.searchText !== undefined,
			text: this.searchText,
		});
	}

	public search(): void {
		this.state.next({
			count: DEFAULT_LIST_SIZE,
			isSearch: true,
			text: this.searchText,
		});
	}

	public handleDelete(course: CourseItem): void {
		this.courseService.remove(course)
			.pipe(
				map(
					(): any => this.state.next({
						count: this.arrLength,
						isSearch: this.searchText !== undefined,
						text: this.searchText,
					}))).subscribe();
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
const DEBOUNCE_TIME: number = 300;
const FILTER_LIMIT: number = 2;
