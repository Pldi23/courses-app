import {CourseItem} from '../../../course/course-item';
import {All, CourseItemActionTypes} from '../action/courseitem.actions';

export interface ICourseItemState {
	course: CourseItem;
	message: string;
}

export const initialCourseItemState: ICourseItemState = {
	course: null,
	message: null,
};

export function courseItemReducer(state: ICourseItemState = initialCourseItemState, action: All): ICourseItemState {
	switch (action.type) {
		case CourseItemActionTypes.GET_COURSE_SUCCESS: {
			return {
				...state,
				course: action.payload.course,
			};
		}
		case CourseItemActionTypes.GET_COURSE_FAILURE: {
			return {
				...state,
				message: action.payload.message,
			};
		}
		case CourseItemActionTypes.GET_EMPTY_ITEM: {
			return {
				...state,
				course: new CourseItem(),
			};
		}
		case CourseItemActionTypes.CANCEL_COURSE_ITEM: {
			return {
				...state,
				course: null,
				message: null,
			};
		}
		case CourseItemActionTypes.MODIFY_COURSE: {
			return {
				...state,
				course: action.payload.course,
			};
		}
		default: {
			return state;
		}
	}
}
