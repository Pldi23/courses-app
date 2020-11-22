import { TestBed } from '@angular/core/testing';
import {ActivatedRouteSnapshot, NavigationExtras, Router, RouterStateSnapshot} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../shared/auth.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', (): void => {
  	let guard: AuthGuard;
  	let authService: Partial<AuthService>;
	const mockRouter: Partial<Router> = {
		navigate(commands: any[], extras?: NavigationExtras): any {
		},
	};
	const dummyRoute: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;

  	beforeEach((): void => {
  		TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			providers: [{ provide: Router, useValue: mockRouter }],
		});
  		guard = TestBed.inject(AuthGuard);
  	});

  	it('should be created', (): void => {
  		expect(guard).toBeTruthy();
  	});
  	it('should return false when route is course and user is not authenticated', (): void => {
  		authService = { isAuthenticated(): boolean { return false; }};
  		guard = new AuthGuard(authService as AuthService, mockRouter as Router);

  		expect(guard.canActivate(dummyRoute, fakeRouterState('/courses'))).toBeFalse();
	});
	it('should return true when route is course and user is authenticated', (): void => {
		authService = { isAuthenticated(): boolean { return true; }};
		guard = new AuthGuard(authService as AuthService, mockRouter as Router);

		expect(guard.canActivate(dummyRoute, fakeRouterState('/courses'))).toBeTrue();
	});
});

function fakeRouterState(url: string): RouterStateSnapshot {
	return {
		url,
	} as RouterStateSnapshot;
}
