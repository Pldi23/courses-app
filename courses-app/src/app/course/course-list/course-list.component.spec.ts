import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';
import { OrderByCreationDatePipe } from '../../pipe/order/order-by-creation-date.pipe';
import { CourseItem } from '../course-item';
import { CourseItemsService } from '../course-items.service';
import { CourseListComponent } from './course-list.component';

describe('CourseListComponent', (): void => {
	let component: CourseListComponent;
	let fixture: ComponentFixture<CourseListComponent>;
	let service: CourseItemsService;
	const serviceStub: Partial<CourseItemsService> = {
		fetch(): Observable<CourseItem[]> {
			return of([
				{
					id: 1,
					name: 'Angular lessons',
					date: new Date(2020, 2, 2),
					length: 90,
					description: 'desc',
					isTopRated: true,
					authors: [],
				},
			]);
		},
		getList(): Observable<CourseItem[]> {
			return of([
				{
					id: 2,
					name: 'React lessons',
					date: new Date(2020, 2, 2),
					length: 95,
					description: 'desc',
					isTopRated: true,
					authors: [],
				},
				{
					id: 3,
					name: 'TypeScript lessons',
					date: new Date(2020, 2, 2),
					length: 29,
					description: 'desc',
					isTopRated: true,
					authors: [],
				},
			]);
		},
		remove(course: CourseItem): Observable<void> {
			return of(console.log(course));
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
		service = TestBed.inject(CourseItemsService);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', (): void => {
		expect(component).toBeTruthy();
	});

	it('should load 3 more courses when load more button clicked', (): void => {
		const loadMoreButtonElement: any = fixture.nativeElement.querySelector('#loadMoreButton');
		const dataSpy: any = spyOn(service, 'fetch');
		loadMoreButtonElement.click();
		expect(dataSpy).toHaveBeenCalledWith(0, 4, undefined);
	});

	it('should search items in list when search button clicked', (): void => {
		const searchButtonElement: any = fixture.nativeElement.querySelector('#searchButton');
		const dataSpy: any = spyOn(service, 'fetch');
		component.searchText = 'text';
		searchButtonElement.click();
		expect(dataSpy).toHaveBeenCalledWith(0, 3, 'text');
	});

	it('should not search items in list when search button clicked but no text in input', (): void => {
		const searchButtonElement: any = fixture.nativeElement.querySelector('#searchButton');
		const dataSpy: any = spyOn(service, 'fetch');
		searchButtonElement.click();
		expect(dataSpy).not.toHaveBeenCalledWith();
	});
});
