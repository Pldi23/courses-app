import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', (): void => {
	let service: AuthService;
	beforeEach((): void => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AuthService);
	});
	afterEach((): void => {
		localStorage.removeItem('currentUser');
	});
	it('should be created', (): void => {
		expect(service).toBeTruthy();
	});
	it('should add currentUser to localstorage when login', (): void => {
		const userName: string = 'user';
		const password: string = 'pass';
		service.login(userName, password);
		expect(localStorage.getItem('currentUser')).toEqual(userName);
	});
	it('should not add currentUser to localstorage when userName is null', (): void => {
		const userName: string = null;
		const password: string = 'pass';
		service.login(userName, password);
		expect(localStorage.getItem('currentUser')).toBeNull();
	});
	it('should remove currentUser from localstorage when logout', (): void => {
		localStorage.setItem('currentUser', 'user');
		service.logout();
		expect(localStorage.getItem('currentUser')).toBeNull();
	});
	it('should return false when localstorage not contain currentUser', (): void => {
		expect(service.isAuthenticated()).toBeFalse();
	});
	it('should return true when localstorage contain currentUser', (): void => {
		localStorage.setItem('currentUser', 'user');
		expect(service.isAuthenticated()).toBeTrue();
	});
	it('should return userName when get user info', (): void => {
		localStorage.setItem('currentUser', 'user');
		expect(service.getUserInfo()).toEqual('user');
	});
});
