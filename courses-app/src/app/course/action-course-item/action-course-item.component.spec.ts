import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseItemsService } from '../course-items.service';
import { ActionCourseItemComponent } from './action-course-item.component';

describe('ActionCourseItemComponent', (): void => {
  	let component: ActionCourseItemComponent;
  	let fixture: ComponentFixture<ActionCourseItemComponent>;
  	let mockCourseService: CourseItemsService;

  	beforeEach(async (): Promise<void> => {
  		await TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			declarations: [ ActionCourseItemComponent ],
			providers: [{provide: CourseItemsService, useValue: mockCourseService}],
		})
			.compileComponents();
		mockCourseService = TestBed.inject(CourseItemsService);
  	});

  	beforeEach((): void => {
  		fixture = TestBed.createComponent(ActionCourseItemComponent);
  		component = fixture.componentInstance;
  		fixture.detectChanges();
  	});

  	it('should create', (): void => {
  		expect(component).toBeTruthy();
  	});
});
