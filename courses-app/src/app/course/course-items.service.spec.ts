import { TestBed } from '@angular/core/testing';
import { CourseItem } from './course-item';
import { CourseItemsService } from './course-items.service';

describe('CourseItemsService', (): void => {
  	let service: CourseItemsService;

  	beforeEach((): void => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(CourseItemsService);
  	});

  	it('should be created', (): void => {
		expect(service).toBeTruthy();
  	});

	it('should get list', (): void => {
		const courseItems: CourseItem[] = service.getList();
		expect(courseItems).not.toBe(null);
	});

	it('should fetch limited data', (): void => {
		const courseItems: CourseItem[] = service.fetch(0, 3);
		expect(courseItems.length).toBe(3);
	});
});
