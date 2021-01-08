import { ComponentFixture, TestBed} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TranslateModule} from '@ngx-translate/core';
import { IState } from '../store/reduce/auth.reducers';
import { LoginComponent } from './login.component';

describe('LoginComponent', (): void => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;
	let mockStore: MockStore;
	const initialState: IState = {
		isAuthenticated: false,
		user: null,
		token: null,
		errorMessage: '' };

	beforeEach((): void => {
		TestBed.configureTestingModule({
			imports: [ RouterTestingModule, FormsModule, TranslateModule.forRoot() ],
			declarations: [ LoginComponent ],
			providers: [provideMockStore({ initialState })],
		})
			.compileComponents();
		mockStore = TestBed.inject(MockStore);
		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', (): void => {
		expect(component).toBeTruthy();
	});
	afterEach((): void => { fixture.destroy(); });
});
