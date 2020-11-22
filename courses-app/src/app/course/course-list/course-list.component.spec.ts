import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderByCreationDatePipe } from '../../pipe/order/order-by-creation-date.pipe';
import { CourseItem } from '../course-item';
import { CourseItemsService } from '../course-items.service';
import { CourseListComponent } from './course-list.component';

describe('CourseListComponent', (): void => {
	let component: CourseListComponent;
	let fixture: ComponentFixture<CourseListComponent>;
	let service: CourseItemsService;
	const serviceStub: Partial<CourseItemsService> = {
		fetch(): CourseItem[] {
			return [
				{
					id: 1,
					title: 'Angular lessons',
					creationDate: new Date(2020, 2, 2),
					duration: 90,
					description: 'desc',
					topRated: true,
				},
			];
		},
		getList(): CourseItem[] {
			return [
				{
					id: 2,
					title: 'React lessons',
					creationDate: new Date(2020, 2, 2),
					duration: 95,
					description: 'desc',
					topRated: true,
				},
				{
					id: 3,
					title: 'TypeScript lessons',
					creationDate: new Date(2020, 2, 2),
					duration: 29,
					description: 'desc',
					topRated: true,
				},
			];
		},
		remove(course: CourseItem): void {
			console.log(course);
		},
	};

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			declarations: [ CourseListComponent, OrderByCreationDatePipe ],
			providers: [{ provide: CourseItemsService, useValue: serviceStub }],
		})
		.compileComponents();
	});

	beforeEach((): void => {
		fixture = TestBed.createComponent(CourseListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		service = TestBed.inject(CourseItemsService);
	});

	it('should create', (): void => {
		expect(component).toBeTruthy();
	});

	it('should load 3 more courses when load more button clicked', (): void => {
		const loadMoreButtonElement: any = fixture.nativeElement.querySelector('#loadMoreButton');
		const dataSpy: any = spyOn(service, 'fetch');
		loadMoreButtonElement.click();
		expect(dataSpy).toHaveBeenCalledWith(1, 4);
	});

	it('should load first 3 courses on init', (): void => {
		const dataSpy: any = spyOn(service, 'fetch');
		component.ngOnInit();
		expect(dataSpy).toHaveBeenCalledWith(0, 3);
	});

	it('should search items in list when search button clicked', (): void => {
		const searchButtonElement: any = fixture.nativeElement.querySelector('#searchButton');
		const dataSpy: any = spyOn(service, 'getList');
		component.searchText = 'text';
		searchButtonElement.click();
		expect(dataSpy).toHaveBeenCalledWith();
	});

	it('should not search items in list when search button clicked but no text in input', (): void => {
		const searchButtonElement: any = fixture.nativeElement.querySelector('#searchButton');
		const dataSpy: any = spyOn(service, 'getList');
		searchButtonElement.click();
		expect(dataSpy).not.toHaveBeenCalledWith();
	});

	it('should delete item when list contain item', (): void => {
		const course: CourseItem = component.coursesList[0];
		const spyRemove: any = spyOn(service, 'remove');
		component.handleDelete(course);
		expect(spyRemove).toHaveBeenCalledWith(course);
	});

	it('should not delete item when list not contain item', (): void => {
		const expectedList: CourseItem[] = component.coursesList;
		const course: CourseItem = {
			id: 100,
			title: 'any',
			creationDate: new Date(2020, 2, 2),
			duration: 90,
			description: 'ENGL',
			topRated: true,
		};
		component.handleDelete(course);
		expect(component.coursesList).toEqual(expectedList);
	});
});
