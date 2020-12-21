import {Injectable} from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {LoginRequired} from '../shared/store/action/auth.actions';
import {selectAuthState, IAppState} from '../shared/store/app.state';
import {IState} from '../shared/store/reduce/auth.reducers';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	private readonly routeURL: string;

	constructor(private readonly store: Store<IAppState>,
				private readonly router: Router) {
		this.routeURL = this.router.url;
	}

	public canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> {
		return this.store.select(selectAuthState).pipe(
			map((state: IState): boolean => {
				if (!state.isAuthenticated && this.routeURL !== '/login') {
					this.store.dispatch(new LoginRequired({}));
					return false;
				}
				return true;
			}),
		);
	}
}
