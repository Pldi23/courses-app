import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CourseItem } from './course-item';
import { CourseItemsService } from './course-items.service';

describe('CourseItemsService', (): void => {
  	let service: CourseItemsService;
	let httpTestingController: HttpTestingController;

  	beforeEach((): void => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [CourseItemsService],
		});
		service = TestBed.inject(CourseItemsService);
		httpTestingController = TestBed.inject(HttpTestingController);
  	});

  	it('should be created', (): void => {
		expect(service).toBeTruthy();
  	});

	it('should fetch limited data', (): void => {
		const data: CourseItem[] = [new CourseItem()];
		service.getList().subscribe((response: CourseItem[]): any => expect(response).toBe(data));
		const req: TestRequest = httpTestingController.expectOne('/courses');
		expect(req.request.method).toBe('GET');
		req.flush(data);
	});

	it('should post item when create', (): void => {
		const data: CourseItem = new CourseItem();
		service.create(data).subscribe((response: CourseItem): any => expect(response).toBe(data));
		const req: TestRequest = httpTestingController.expectOne('/courses');
		expect(req.request.method).toBe('POST');
		req.flush(data);
	});

	it('should get item when get by id', (): void => {
		const data: CourseItem = new CourseItem();
		service.getById(222).subscribe((response: CourseItem): any => expect(response).toBe(data));
		const req: TestRequest = httpTestingController.expectOne('/courses/222');
		expect(req.request.method).toBe('GET');
		req.flush(data);
	});

	it('should get item when get by id', (): void => {
		const data: CourseItem = new CourseItem();
		service.update(data, 222).subscribe((response: CourseItem): any => expect(response).toBe(data));
		const req: TestRequest = httpTestingController.expectOne('/courses/222');
		expect(req.request.method).toBe('PATCH');
		req.flush(data);
	});

	afterEach((): void => httpTestingController.verify());
});
