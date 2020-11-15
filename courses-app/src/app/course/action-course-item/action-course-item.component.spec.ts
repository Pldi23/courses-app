import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActionCourseItemComponent } from './action-course-item.component';

describe('ActionCourseItemComponent', (): void => {
  	let component: ActionCourseItemComponent;
  	let fixture: ComponentFixture<ActionCourseItemComponent>;

  	beforeEach(async (): Promise<void> => {
  		await TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			declarations: [ ActionCourseItemComponent ],
		})
			.compileComponents();
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
