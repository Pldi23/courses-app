import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', (): void => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async (): Promise<void> => {
	await TestBed.configureTestingModule({
		declarations: [ CourseItemComponent ],
	})
	.compileComponents();
  });

  beforeEach((): void => {
	fixture = TestBed.createComponent(CourseItemComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', (): void => {
	expect(component).toBeTruthy();
  });
});
