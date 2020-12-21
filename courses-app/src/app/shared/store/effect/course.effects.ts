import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ofType, Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {of, Observable} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {CourseItem} from '../../../course/course-item';
import {CourseItemsService} from '../../../course/course-items.service';
import {
	CourseActionTypes,
	DeleteCourse,
	DeleteCourseFailure,
	GetList,
	GetListFailure,
	GetListSuccess,
} from '../action/course.actions';

@Injectable()
export class CourseEffects {

	constructor(private readonly actions: Actions, private readonly courseService: CourseItemsService, private readonly router: Router) {}

	@Effect()
	public GetList: Observable<Action> = this.actions.pipe(
		ofType(CourseActionTypes.GET_LIST),
		map((action: GetList): any => action.payload),
		switchMap((payload: any): Observable<Action> => {
			return this.courseService.fetch(0, payload.count, payload.searchText).pipe(
				map((courses: CourseItem[]): Action => {
					return new GetListSuccess({courses: courses});
				}),
				catchError((error: HttpErrorResponse): Observable<Action> => {
					return of(new GetListFailure({ message: error.message }));
				}));
		}),
	);

	@Effect()
	public DeleteCourse: Observable<Action> = this.actions.pipe(
		ofType(CourseActionTypes.DELETE_COURSE),
		map((action: DeleteCourse): any => action.payload),
		switchMap((payload: any): Observable<Action> => {
			return this.courseService.remove(payload.course).pipe(
				map((): Action => {
					return new GetList(payload);
				}),
				catchError((error: HttpErrorResponse): Observable<Action> => {
							return of(new DeleteCourseFailure({ message: error.message }));
				}));
		}),
	);

}
