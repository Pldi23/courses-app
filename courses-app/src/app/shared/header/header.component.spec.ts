import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { UserInfoPipe } from '../../pipe/usernfo/user-info.pipe';
import { IState } from '../store/reduce/auth.reducers';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', (): void => {
  	let component: HeaderComponent;
  	let fixture: ComponentFixture<HeaderComponent>;
	let mockStore: MockStore;
	const initialState: IState = {
		isAuthenticated: false,
		user: null,
		token: null,
		errorMessage: '' };

  	beforeEach((): void => {
		TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			declarations: [ HeaderComponent, UserInfoPipe ],
			providers: [provideMockStore({ initialState })],
		})
			.compileComponents();
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		mockStore = TestBed.inject(MockStore);
		fixture.detectChanges();
  	});

  	it('should create', (): void => {
		expect(component).toBeTruthy();
  	});

	afterEach((): void => { fixture.destroy(); });
});
