import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { IAuthorState } from '../../../shared/store/reduce/author.reducer';
import { AuthorsInputComponent } from './authors-input.component';

describe('AuthorsInputComponent', (): void => {
  	let component: AuthorsInputComponent;
  	let fixture: ComponentFixture<AuthorsInputComponent>;
	let mockStore: MockStore;
	const initialState: IAuthorState = { authors: [], searchText: null, message: null};

  	beforeEach(async (): Promise<void> => {
  		await TestBed.configureTestingModule({
			imports: [ReactiveFormsModule, FormsModule],
			declarations: [ AuthorsInputComponent ],
			providers: [provideMockStore({ initialState })],
		})
			.compileComponents();
		mockStore = TestBed.inject(MockStore);
  		fixture = TestBed.createComponent(AuthorsInputComponent);
  		component = fixture.componentInstance;
  		fixture.detectChanges();
  	});

  	it('should create', (): void => {
  		expect(component).toBeTruthy();
  	});

	afterEach((): void => { fixture.destroy(); });
});
