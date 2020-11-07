import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Router} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', (): void => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;
	const router: any = {
		navigate: jasmine.createSpy('navigate'),
	};
	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			declarations: [ LoginComponent ],
			providers: [{ provide: Router, useValue: router }],
		})
			.compileComponents();
	});
	beforeEach((): void => {
		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', (): void => {
		expect(component).toBeTruthy();
	});
	it('should not navigate to courses when logout with undefined username or password', (): void => {
		component.userName = undefined;
		component.password = undefined;
		fixture.detectChanges();
		component.login();
		expect(router.navigate).not.toHaveBeenCalledWith(['/courses']);
	});
	it('should navigate to courses when logout with username or password', (): void => {
		component.userName = 'user';
		component.password = 'password';
		fixture.detectChanges();
		component.login();
		expect(router.navigate).toHaveBeenCalledWith(['/courses']);
	});
});
