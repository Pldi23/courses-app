import {Action} from '@ngrx/store';

export enum AuthorActionTypes {
	GET_AUTHORS_LIST = '[Author] Get List',
	GET_AUTHORS_LIST_SUCCESS = '[Author] Get List Success',
	GET_AUTHORS_LIST_FAILURE = '[Author] Get List Failure',
}

export class GetAuthorsList implements Action {
	public readonly type: AuthorActionTypes = AuthorActionTypes.GET_AUTHORS_LIST;
	constructor(public payload: any) {}
}

export class GetAuthorsListSuccess implements Action {
	public readonly type: AuthorActionTypes = AuthorActionTypes.GET_AUTHORS_LIST_SUCCESS;
	constructor(public payload: any) {}
}

export class GetAuthorsListFailure implements Action {
	public readonly type: AuthorActionTypes = AuthorActionTypes.GET_AUTHORS_LIST_FAILURE;
	constructor(public payload: any) {}
}

export type All =
	| GetAuthorsList
	| GetAuthorsListSuccess
	| GetAuthorsListFailure;
