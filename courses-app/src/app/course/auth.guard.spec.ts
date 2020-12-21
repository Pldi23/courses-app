import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, NavigationExtras, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { IState } from '../shared/store/reduce/auth.reducers';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', (): void => {
  	let guard: AuthGuard;
	let mockStore: MockStore;
	const initialState: IState = {
		isAuthenticated: false,
		user: null,
		token: null,
		errorMessage: null };
	const mockRouter: Partial<Router> = {
		navigate(commands: any[], extras?: NavigationExtras): any {
		},
	};
	const dummyRoute: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;

  	beforeEach((): void => {
  		TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			providers: [{ provide: Router, useValue: mockRouter }, provideMockStore({ initialState })],
		});
  		guard = TestBed.inject(AuthGuard);
  		mockStore = TestBed.inject(MockStore);
  	});

  	it('should be created', (): void => {
  		expect(guard).toBeTruthy();
  	});
});
