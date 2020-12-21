import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ICourseItemState } from '../../shared/store/reduce/courseitem.reducer';
import { CourseItem } from '../course-item';
import { ActionCourseItemComponent } from './action-course-item.component';

describe('ActionCourseItemComponent', (): void => {
  	let component: ActionCourseItemComponent;
  	let fixture: ComponentFixture<ActionCourseItemComponent>;
  	let mockStore: MockStore;
  	const initialState: ICourseItemState = { course: new CourseItem(), message: null};

  	beforeEach((): void => {
		TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			declarations: [ ActionCourseItemComponent ],
			providers: [provideMockStore({ initialState })],
		})
			.compileComponents();
		mockStore = TestBed.inject(MockStore);
  		fixture = TestBed.createComponent(ActionCourseItemComponent);
  		component = fixture.componentInstance;
  		fixture.detectChanges();
  	});

  	it('should create', (): void => {
  		expect(component).toBeTruthy();
  	});

	afterEach((): void => { fixture.destroy(); });

});
