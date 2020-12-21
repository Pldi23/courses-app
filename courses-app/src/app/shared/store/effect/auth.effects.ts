import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ofType, Actions, Effect} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { TOKEN } from '../../../constant';
import { AuthService } from '../../auth.service';
import { UserEntity } from '../../user-entity';
import {
	AuthActionTypes, GetUserInfo,
	GetUserInfoFailure,
	GetUserInfoSuccess,
	LogIn,
	LogInFailure,
	LogInSuccess,
} from '../action/auth.actions';

@Injectable()
export class AuthEffects {

	constructor(private readonly actions: Actions, private readonly authService: AuthService, private readonly router: Router) {}

	@Effect()
	public LogIn: Observable<Action> = this.actions.pipe(
		ofType(AuthActionTypes.LOGIN),
		map((action: LogIn): any => action.payload),
		switchMap((payload: any): Observable<Action> =>
			this.authService.login(payload.username, payload.password).pipe(
				map((token: string): Action => new LogInSuccess({token: token})),
				catchError((error: HttpErrorResponse): Observable<Action> => {
					return of(new LogInFailure({ error: error }));
				})),
		),
	);

	@Effect()
	public LogInSuccess: Observable<Action> = this.actions.pipe(
		ofType(AuthActionTypes.LOGIN_SUCCESS),
		map((action: LogInSuccess): any => action.payload.token),
		switchMap((payload: any): Observable<Action> => {
			localStorage.setItem(TOKEN, payload.token);
			this.router.navigateByUrl('/courses');
			return of(new GetUserInfo({}));
		}),
	);

	@Effect({ dispatch: false })
	public LogInFailure: Observable<void> = this.actions.pipe(
		ofType(AuthActionTypes.LOGIN_FAILURE),
		tap((): void => {
			this.router.navigateByUrl('/login');
		}),
	);

	@Effect()
	public GetUserInfo: Observable<Action> = this.actions.pipe(
		ofType(AuthActionTypes.GET_USER_INFO),
		concatMap((): Observable<Action> => {
			return this.authService.getUserInfo().pipe(
				map((user: UserEntity): Action => {
					return new GetUserInfoSuccess(user);
				}),
				catchError((error: HttpErrorResponse): Observable<Action> => {
					return of(new GetUserInfoFailure({ error: error }));
				}));
		}),
	);

	@Effect({ dispatch: false })
	public GetUserInfoFailure: Observable<any> = this.actions.pipe(
		ofType(AuthActionTypes.GET_USER_INFO_FAILURE),
		map((action: GetUserInfoFailure): string => action.payload),
		tap((message: string): any =>
			Swal.fire(message, 'Could not get user info', 'error')),
	);

	@Effect({ dispatch: false })
	public LogOut: Observable<void> = this.actions.pipe(
		ofType(AuthActionTypes.LOGOUT),
		tap((): void => {
			this.authService.logout();
			this.router.navigateByUrl('/login');
		}),
	);

	@Effect({ dispatch: false})
	public LoginRequired: Observable<void> = this.actions.pipe(
		ofType(AuthActionTypes.LOGIN_REQUIRED),
		tap((): void => {
			this.router.navigateByUrl('/login');
		}),
	);
}
