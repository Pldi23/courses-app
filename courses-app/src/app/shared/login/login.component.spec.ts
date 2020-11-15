import { ComponentFixture, TestBed} from '@angular/core/testing';
import { NavigationExtras, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', (): void => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;
	const mockRouter: Partial<Router> = {
		navigate(commands: any[], extras?: NavigationExtras): any {
		},
	};
	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			declarations: [ LoginComponent ],
			providers: [{ provide: Router, useValue: mockRouter }],
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
		const buttonElement: any = fixture.nativeElement.querySelector('#login');
		const dataSpy: any = spyOn(mockRouter, 'navigate');
		buttonElement.click();
		expect(dataSpy).not.toHaveBeenCalled();
	});
	it('should navigate to courses when logout with username or password', (): void => {
		component.userName = 'user';
		component.password = 'password';
		const buttonElement: any = fixture.nativeElement.querySelector('#login');
		const dataSpy: any = spyOn(mockRouter, 'navigate');
		buttonElement.click();
		expect(dataSpy).toHaveBeenCalled();
	});
});
