import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ofType, Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {TranslateService} from '@ngx-translate/core';
import {of, Observable} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {CourseItem} from '../../../course/course-item';
import {CourseItemsService} from '../../../course/course-items.service';
import {
	CourseItemActionTypes,
	GetCourse,
	GetCourseFailure,
	GetCourseSuccess,
	GetEmptyItem, SaveCourse, SaveCourseSuccess,
} from '../action/courseitem.actions';

@Injectable()
export class CourseItemEffects {

	constructor(private readonly actions: Actions, private readonly courseService: CourseItemsService,
				private readonly router: Router, private readonly translateService: TranslateService) {
	}

	@Effect()
	public GetCourse: Observable<Action> = this.actions.pipe(
		ofType(CourseItemActionTypes.GET_COURSE),
		map((action: GetCourse): string => action.payload.id),
		switchMap((id: string): Observable<Action> => {
			if (this.isNumber(id)) {
				return this.courseService.getById(Number(id)).pipe(
					map((course: CourseItem): Action => {
						return new GetCourseSuccess({course: course});
					}),
					catchError((error: HttpErrorResponse): Observable<Action> => {
						return of(new GetCourseFailure({message: 'ACTION.COURSE.NOT.FOUND'}));
					}));
			} else {
				return of(new GetEmptyItem({}));
			}
		}),
	);

	@Effect()
	public GetCourseFailure: Observable<string> = this.actions.pipe(
		ofType(CourseItemActionTypes.GET_COURSE_FAILURE),
		map((action: GetCourseFailure): string => action.payload.message),
		tap((message: string): any => {
			this.router.navigate(['/courses']);
			Swal.fire(`Error`, message, 'error');
		}),
	);

	@Effect({dispatch: false})
	public CancelCourseItem: Observable<void> = this.actions.pipe(
		ofType(CourseItemActionTypes.CANCEL_COURSE_ITEM),
		tap((): any => {
			this.router.navigate(['/courses']);
		}),
	);

	@Effect()
	public SaveCourse: Observable<Action> = this.actions.pipe(
		ofType(CourseItemActionTypes.SAVE_COURSE),
		map((action: SaveCourse): CourseItem => action.payload),
		switchMap((course: CourseItem): Observable<Action> => {
			if (course.id === undefined) {
				return this.courseService.create(course).pipe(
					map((course: CourseItem): Action => {
						return new SaveCourseSuccess({course: course});
					}),
					catchError((error: HttpErrorResponse): Observable<Action> => of(new GetCourseFailure({message: 'ACTION.COURSE.NOT.FOUND'}))));
			} else {
				return this.courseService.update(course, course.id).pipe(
					map((course: CourseItem): Action => {
						return new SaveCourseSuccess({course: course});
					}),
					catchError((error: HttpErrorResponse): Observable<Action> => of(new GetCourseFailure({message: 'ACTION.COURSE.NOT.FOUND'}))));
			}
		}),
	);

	@Effect({dispatch: false})
	public SaveCourseSuccess: Observable<CourseItem> = this.actions.pipe(
		ofType(CourseItemActionTypes.SAVE_COURSE_SUCCESS),
		map((action: SaveCourseSuccess): CourseItem => action.payload.course),
		tap((course: CourseItem): any => {
			this.router.navigate(['/courses']);
			this.translateService.get('ACTION.COURSE.SAVED.SUCCESS').subscribe(
				(translations: any): any =>
					Swal.fire(`${course.name}`, translations, 'success'),
			);
		}),
	);

	private isNumber(value: string | number): boolean {
		return ((value != null) &&
			(value !== '') &&
			!isNaN(Number(value.toString())));
	}
}
