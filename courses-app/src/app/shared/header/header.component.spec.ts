import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Observable } from 'rxjs';
import { UserInfoPipe } from '../../pipe/usernfo/user-info.pipe';
import { AuthService } from '../auth.service';
import { UserEntity } from '../user-entity';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', (): void => {
  	let component: HeaderComponent;
  	let fixture: ComponentFixture<HeaderComponent>;
  	const mockAuthService: Partial<AuthService> = {
  		isAuthenticated(): boolean {
  			return true;
		},
		getUserName(): string {
  			return 'name';
		},
		getUserInfo(): Observable<UserEntity> {
			return of(new UserEntity(222, 'name', 'name', 'login', 'pass'));
		},
	};

  	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			declarations: [ HeaderComponent, UserInfoPipe ],
			providers: [{provide: AuthService, useValue: mockAuthService}],
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
});
