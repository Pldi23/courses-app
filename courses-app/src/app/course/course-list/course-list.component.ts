import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {BehaviorSubject, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';
import {DeleteCourse, GetList} from '../../shared/store/action/course.actions';
import {selectCourseState, IAppState} from '../../shared/store/app.state';
import {ICourseState} from '../../shared/store/reduce/course.reducer';
import {CourseItem} from '../course-item';

@Component({
	selector: 'app-courses-list',
	templateUrl: './course-list.component.html',
	styleUrls: ['./course-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent implements OnInit {
	public getState: Observable<ICourseState>;
	public coursesList$: Observable<CourseItem[]>;
	@Input() public searchText: string = '';
	public message: string;
	public searchState: BehaviorSubject<any> = new BehaviorSubject({
		count: DEFAULT_LIST_SIZE,
		isSearch: false,
		text: '',
	});

	constructor(private readonly store: Store<IAppState>) {
	}

	public ngOnInit(): void {
		this.coursesList$ = this.searchState.pipe(
			filter((state: any): boolean => !state.isSearch || state.text.length > FILTER_LIMIT),
			debounceTime(DEBOUNCE_TIME),
			distinctUntilChanged(),
			switchMap((state: any): Observable<CourseItem[]> => {
				return this.getCourses(state.count);
			}));
	}

	public fetchMore(count: number): void {
		this.getCourses(count);
	}

	public search(): void {
		this.searchState.next({
			count: DEFAULT_LIST_SIZE,
			isSearch: true,
			text: this.searchText,
		});
	}

	public handleDelete(course: CourseItem): void {
		const payload: any = {
			course: course,
			searchText: this.searchText,
			count: DEFAULT_LIST_SIZE,
		};
		this.store.dispatch(new DeleteCourse(payload));
	}

	private getCourses(length: number): Observable<CourseItem[]> {
		const payload: any = {
			searchText: this.searchText,
			count: length,
		};
		this.store.dispatch(new GetList(payload));
		this.getState = this.store.select(selectCourseState);
		return  this.getState.pipe(
			map((state: ICourseState): CourseItem[] => {
				return state.courses;
			}),
		);
	}
}

const DEFAULT_LIST_SIZE: number = 3;
const DEBOUNCE_TIME: number = 300;
const FILTER_LIMIT: number = 2;
