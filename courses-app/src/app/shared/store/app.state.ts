import {createFeatureSelector, MemoizedSelector} from '@ngrx/store';
import {IState} from './reduce/auth.reducers';
import {ICourseState} from './reduce/course.reducer';
import {ICourseItemState} from './reduce/courseitem.reducer';

export interface IAppState {
	authState: IState;
	courseState: ICourseState;
	courseItemState: ICourseItemState;
}

export const selectAuthState: MemoizedSelector<object, IState> = createFeatureSelector<IState>('auth');
export const selectCourseState: MemoizedSelector<object, ICourseState> = createFeatureSelector<ICourseState>('course');
export const selectCourseItemState: MemoizedSelector<object, ICourseItemState> = createFeatureSelector<ICourseItemState>('courseItem');
