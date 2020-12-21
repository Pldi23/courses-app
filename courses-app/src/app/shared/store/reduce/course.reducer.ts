import {CourseItem} from '../../../course/course-item';
import {All, CourseActionTypes} from '../action/course.actions';

export interface ICourseState {
	courses: CourseItem[];
	searchText: string;
	count: number;
	message: string;
}

export const initialCoursesState: ICourseState = {
	courses: [],
	searchText: '',
	count: 0,
	message: null,
};

export function coursesReducer(state: ICourseState = initialCoursesState, action: All): ICourseState {
	switch (action.type) {
		case CourseActionTypes.GET_LIST: {
			return {
				...state,
				searchText: action.payload.searchText,
			};
		}
		case CourseActionTypes.GET_LIST_SUCCESS: {
			return {
				...state,
				courses: action.payload.courses,
			};
		}
		case CourseActionTypes.GET_LIST_FAILURE: {
			return {
				...state,
				message: action.payload.error,
			};
		}
		case CourseActionTypes.DELETE_COURSE: {
			return {
				...state,
				message: action.payload.message,
			};
		}
		case CourseActionTypes.DELETE_COURSE_FAILURE: {
			return {
				...state,
				message: action.payload.message,
			};
		}
		default: {
			return state;
		}
	}
}
