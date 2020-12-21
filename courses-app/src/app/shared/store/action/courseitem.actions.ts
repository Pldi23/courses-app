import {Action} from '@ngrx/store';

export enum CourseItemActionTypes {
	SAVE_COURSE = '[CourseItem] Save Course',
	UPDATE_COURSE_ITEM = '[CourseItem] Update Course',
	SAVE_COURSE_SUCCESS = '[CourseItem] Save Course Success',
	SAVE_COURSE_FAILURE = '[CourseItem] Save Course Failure',
	GET_COURSE = '[CourseItem] Get Course',
	GET_COURSE_SUCCESS = '[CourseItem] Get Course Success',
	GET_COURSE_FAILURE = '[CourseItem] Get Course Failure',
	GET_EMPTY_ITEM = '[CourseItem] Get Empty Item',
	CANCEL_COURSE_ITEM = '[CourseItem] Cancel Course Item',
	MODIFY_COURSE = '[CourseItem] Modify Course',
}

export class SaveCourse implements Action {
	public readonly type: CourseItemActionTypes = CourseItemActionTypes.SAVE_COURSE;
	constructor(public payload: any) {}
}

export class UpdateCourse implements Action {
	public readonly type: CourseItemActionTypes = CourseItemActionTypes.UPDATE_COURSE_ITEM;
	constructor(public payload: any) {}
}

export class SaveCourseSuccess implements Action {
	public readonly type: CourseItemActionTypes = CourseItemActionTypes.SAVE_COURSE_SUCCESS;
	constructor(public payload: any) {}
}

export class SaveCourseFailure implements Action {
	public readonly type: CourseItemActionTypes = CourseItemActionTypes.SAVE_COURSE_FAILURE;
	constructor(public payload: any) {}
}

export class GetCourse implements Action {
	public readonly type: CourseItemActionTypes = CourseItemActionTypes.GET_COURSE;
	constructor(public payload: any) {}
}

export class GetCourseSuccess implements Action {
	public readonly type: CourseItemActionTypes = CourseItemActionTypes.GET_COURSE_SUCCESS;
	constructor(public payload: any) {}
}

export class GetCourseFailure implements Action {
	public readonly type: CourseItemActionTypes = CourseItemActionTypes.GET_COURSE_FAILURE;
	constructor(public payload: any) {}
}

export class GetEmptyItem implements Action {
	public readonly type: CourseItemActionTypes = CourseItemActionTypes.GET_EMPTY_ITEM;
	constructor(public payload: any) {}
}

export class CancelCourseItem implements Action {
	public readonly type: CourseItemActionTypes = CourseItemActionTypes.CANCEL_COURSE_ITEM;
	constructor(public payload: any) {}
}

export class ModifyCourseItem implements Action {
	public readonly type: CourseItemActionTypes = CourseItemActionTypes.MODIFY_COURSE;
	constructor(public payload: any) {}
}

export type All =
	| SaveCourse
	| UpdateCourse
	| SaveCourseSuccess
	| SaveCourseFailure
	| GetCourse
	| GetCourseSuccess
	| GetCourseFailure
	| GetEmptyItem
	| CancelCourseItem
	| ModifyCourseItem;
