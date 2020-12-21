import {Action} from '@ngrx/store';

export enum CourseActionTypes {
	GET_LIST = '[Course] Get List',
	GET_LIST_SUCCESS = '[Course] Get List Success',
	GET_LIST_FAILURE = '[Course] Get List Failure',
	DELETE_COURSE = '[Course] Delete Course',
	DELETE_COURSE_FAILURE = '[Course] Delete Course Failure',
}
export class GetList implements Action {
	public readonly type: CourseActionTypes = CourseActionTypes.GET_LIST;
	constructor(public payload: any) {}
}

export class GetListSuccess implements Action {
	public readonly type: CourseActionTypes = CourseActionTypes.GET_LIST_SUCCESS;
	constructor(public payload: any) {}
}

export class GetListFailure implements Action {
	public readonly type: CourseActionTypes = CourseActionTypes.GET_LIST_FAILURE;
	constructor(public payload: any) {}
}

export class DeleteCourse implements Action {
	public readonly type: CourseActionTypes = CourseActionTypes.DELETE_COURSE;
	constructor(public payload: any) {}
}

export class DeleteCourseFailure implements Action {
	public readonly type: CourseActionTypes = CourseActionTypes.DELETE_COURSE_FAILURE;
	constructor(public payload: any) {}
}

export type All =
	| GetList
	| GetListSuccess
	| GetListFailure
	| DeleteCourse
	| DeleteCourseFailure;
