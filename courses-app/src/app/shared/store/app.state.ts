import {createFeatureSelector, MemoizedSelector} from '@ngrx/store';
import {IState} from './reduce/auth.reducers';
import {IAuthorState} from './reduce/author.reducer';
import {ICourseState} from './reduce/course.reducer';
import {ICourseItemState} from './reduce/courseitem.reducer';

export interface IAppState {
	authState: IState;
	courseState: ICourseState;
	courseItemState: ICourseItemState;
	authorsState: IAuthorState;
}

export const selectAuthState: MemoizedSelector<object, IState> = createFeatureSelector<IState>('auth');
export const selectCourseState: MemoizedSelector<object, ICourseState> = createFeatureSelector<ICourseState>('course');
export const selectCourseItemState: MemoizedSelector<object, ICourseItemState> = createFeatureSelector<ICourseItemState>('courseItem');
export const selectAuthorState: MemoizedSelector<object, IAuthorState> = createFeatureSelector<IAuthorState>('author');
