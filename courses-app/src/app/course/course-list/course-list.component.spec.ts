import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListComponent } from './course-list.component';

describe('CourseListComponent', (): void => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async (): Promise<void> => {
	await TestBed.configureTestingModule({
		declarations: [ CourseListComponent ],
	})
	.compileComponents();
  });

  beforeEach((): void => {
	fixture = TestBed.createComponent(CourseListComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', (): void => {
	expect(component).toBeTruthy();
  });
});
