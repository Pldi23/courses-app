import {Action} from '@ngrx/store';

export enum AuthActionTypes {
	LOGIN = '[Auth] Login',
	LOGIN_SUCCESS = '[Auth] Login Success',
	LOGIN_FAILURE = '[Auth] Login Failure',
	LOGOUT = '[Auth] Logout',
	GET_USER_INFO = '[Auth] Get User Info',
	GET_USER_INFO_SUCCESS = '[Auth] Get User Info Success',
	GET_USER_INFO_FAILURE = '[Auth] Get User Info Failure',
	LOGIN_REQUIRED = '[Auth] Login Required',
}

export class LogIn implements Action {
	public readonly type: AuthActionTypes = AuthActionTypes.LOGIN;
	constructor(public payload: any) {}
}

export class LogInSuccess implements Action {
	public readonly type: AuthActionTypes = AuthActionTypes.LOGIN_SUCCESS;
	constructor(public payload: any) {}
}

export class LogInFailure implements Action {
	public readonly type: AuthActionTypes = AuthActionTypes.LOGIN_FAILURE;
	constructor(public payload: any) {}
}

export class LogOut implements Action {
	public readonly type: AuthActionTypes = AuthActionTypes.LOGOUT;
	constructor(public payload: any) {}
}

export class GetUserInfo implements Action {
	public readonly type: AuthActionTypes = AuthActionTypes.GET_USER_INFO;
	constructor(public payload: any) {}
}

export class GetUserInfoSuccess implements Action {
	public readonly type: AuthActionTypes = AuthActionTypes.GET_USER_INFO_SUCCESS;
	constructor(public payload: any) {}
}

export class GetUserInfoFailure implements Action {
	public readonly type: AuthActionTypes = AuthActionTypes.GET_USER_INFO_FAILURE;
	constructor(public payload: any) {}
}

export class LoginRequired implements Action {
	public readonly type: AuthActionTypes = AuthActionTypes.LOGIN_REQUIRED;
	constructor(public payload: any) {}
}

export type All =
	| LogIn
	| LogInSuccess
	| LogInFailure
	| LogOut
	| GetUserInfo
	| LoginRequired;
