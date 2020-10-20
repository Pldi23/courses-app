import { TestBed } from '@angular/core/testing';

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
});
