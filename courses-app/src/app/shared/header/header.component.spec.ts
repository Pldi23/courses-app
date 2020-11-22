import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', (): void => {
  	let component: HeaderComponent;
  	let fixture: ComponentFixture<HeaderComponent>;

  	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			declarations: [ HeaderComponent ],
		})
		.compileComponents();
  	});
  	afterEach((): void => {
  		localStorage.removeItem('currentUser');
	});

  	beforeEach((): void => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
  	});

  	it('should create', (): void => {
		expect(component).toBeTruthy();
  	});
  	it('should render username and logout when is authenticated', (): void => {
  		localStorage.setItem('currentUser', 'name');
		fixture.detectChanges();
		const element: any = fixture.nativeElement.querySelector('#headerUserInfoSection');
		expect(element.textContent).toContain('name');
		expect(element.textContent).toContain('Log out');
	});
});
