import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import {TranslateModule} from '@ngx-translate/core';
import { OrderByCreationDatePipe } from '../../pipe/order/order-by-creation-date.pipe';
import { ICourseState } from '../../shared/store/reduce/course.reducer';
import { CourseListComponent } from './course-list.component';

describe('CourseListComponent', (): void => {
	let component: CourseListComponent;
	let fixture: ComponentFixture<CourseListComponent>;
	let mockStore: MockStore;
	const initialState: ICourseState = {
		courses: [],
		searchText: '',
		count: 0,
		message: null};

	beforeEach((): void => {
		TestBed.configureTestingModule({
			imports: [TranslateModule.forRoot()],
			declarations: [ CourseListComponent, OrderByCreationDatePipe ],
			providers: [provideMockStore({ initialState })],
		})
			.compileComponents();
		mockStore = TestBed.inject(MockStore);
		fixture = TestBed.createComponent(CourseListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', (): void => {
		expect(component).toBeTruthy();
	});

	afterEach((): void => { fixture.destroy(); });
});
