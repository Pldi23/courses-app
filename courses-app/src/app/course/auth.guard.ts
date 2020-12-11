import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	NavigationExtras,
	Router,
	RouterStateSnapshot,
} from '@angular/router';
import { of, Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';

@Injectable({
  	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	private routeURL: string;
	constructor(private readonly authService: AuthService,
				private readonly router: Router) {
		this.routeURL = this.router.url;
	}
  	public canActivate(
  		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> {
		if (!this.authService.isAuthenticated() && this.routeURL !== '/login') {
			this.routeURL = '/login';
			const navigationExtras: NavigationExtras = {state: {data: 'Please login to have an access to requested page', route: state.url}};
			this.router.navigate(['/login'], navigationExtras);
			return of(false);
		} else {
			this.routeURL = this.router.url;
			return of(true);
		}
	}
}
