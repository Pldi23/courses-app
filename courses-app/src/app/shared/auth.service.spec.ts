import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TOKEN } from '../constant';
import { AuthService } from './auth.service';

describe('AuthService', (): void => {
	let service: AuthService;
	let httpTestingController: HttpTestingController;
	beforeEach((): void => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});
		service = TestBed.inject(AuthService);
		httpTestingController = TestBed.inject(HttpTestingController);
	});
	afterEach((): void => {
		localStorage.removeItem(TOKEN);
	});
	it('should be created', (): void => {
		expect(service).toBeTruthy();
	});
	it('should post to login path when login', (): void => {
		const data: string = 'token';
		service.login('login', 'path').subscribe((response: string): any => expect(response).toBe(data));
		const req: TestRequest = httpTestingController.expectOne('/auth/login');
		expect(req.request.method).toBe('POST');
		req.flush(data);
	});
	it('should remove currentUser from localstorage when logout', (): void => {
		localStorage.setItem(TOKEN, 'user');
		service.logout();
		expect(localStorage.getItem(TOKEN)).toBeNull();
	});
	it('should return false when localstorage not contain token', (): void => {
		localStorage.removeItem(TOKEN);
		expect(service.isAuthenticated()).toBeFalse();
	});
	it('should return true when localstorage contain token', (): void => {
		localStorage.setItem(TOKEN, 'user');
		expect(service.isAuthenticated()).toBeTrue();
	});
	afterEach((): void => httpTestingController.verify());
});
