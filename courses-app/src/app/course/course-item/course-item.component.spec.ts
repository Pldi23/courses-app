import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseItem } from '../course-item';
import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', (): void => {
	let component: CourseItemComponent;
	let fixture: ComponentFixture<CourseItemComponent>;
	const courseItem: CourseItem = {
		id: 1,
		title: 'name',
		duration: 90,
		creationDate: new Date(2020, 0, 1),
		description: 'description',
	};

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			declarations: [ CourseItemComponent ],
		})
		.compileComponents();
	});

	beforeEach((): void => {
		fixture = TestBed.createComponent(CourseItemComponent);
		component = fixture.componentInstance;
		component.courseItem = courseItem;
		fixture.detectChanges();
	});

	it('should create', (): void => {
		expect(component).toBeTruthy();
	});

	it('should render properties', (): void => {
		const courseTitleElement: any = fixture.nativeElement.querySelector('.card-text');
		const courseDurationDateElement: any = fixture.nativeElement.querySelector('small');
		const courseDescriptionElement: any = fixture.nativeElement.querySelector('p');

		expect(courseTitleElement.textContent).toEqual('name');
		expect(courseDurationDateElement.textContent).toContain(' 90 min');
		expect(courseDurationDateElement.textContent).toContain('Jan 1, 2020');
		expect(courseDescriptionElement.textContent).toEqual(' description ');
	});

	it('should delete course item', (): void => {
		let expectedCourseItem: CourseItem;
		const deleteButtonElement: any = fixture.nativeElement.querySelector('#deleteButton');
		component.delete.subscribe((): any => expectedCourseItem = courseItem);

		deleteButtonElement.click();

		expect(expectedCourseItem).toEqual(courseItem);

	});

	it('should call console log when click edit button', (): void => {
		const editButtonOnClickConsoleText: string = 'edit clicked';
		const editButtonElement: any = fixture.nativeElement.querySelector('#editButton');
		spyOn(console, 'log');
		editButtonElement.click();

		expect(console.log).toHaveBeenCalledWith(editButtonOnClickConsoleText);
	});
});

describe('Test CourseItemComponent using test host', (): void => {
	let testHostComponent: TestHostComponent;
	let fixture: ComponentFixture<TestHostComponent>;
	const course: CourseItem = {
		id: 0,
		title: 'name',
		creationDate: new Date(2020, 2, 2),
		duration: 90,
		description: 'description',
	};

	// Create test host component for courses-item element
	@Component({
		template: `
			<app-courses-item
				[courseItem]="course" (delete)="handleDelete($event)">
			</app-courses-item>`,
	})
	class TestHostComponent {
		private readonly course: CourseItem = course;
		private handleDelete(course: CourseItem): void {
			console.log(`Course: ${course} was deleted!`);
		}
	}

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({declarations: [CourseItemComponent, TestHostComponent]}).compileComponents();
	});

	beforeEach((): void => {
		fixture = TestBed.createComponent(TestHostComponent);
		testHostComponent = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should render properties in item template using test host component', (): void => {
		const courseTitleElement: any = fixture.nativeElement.querySelector('.card-text');
		const courseDurationDateElement: any = fixture.nativeElement.querySelector('small');
		const courseDescriptionElement: any = fixture.nativeElement.querySelector('p');

		expect(courseTitleElement.textContent).toEqual('name');
		expect(courseDurationDateElement.textContent).toContain(' 90 min');
		expect(courseDurationDateElement.textContent).toContain('Mar 2, 2020');
		expect(courseDescriptionElement.textContent).toEqual(' description ');
	});

	it('should emit course.id when clicking on delete button and call console.log with proper argument on host component', (): void => {
		const deleteButtonElement: any = fixture.nativeElement.querySelector('#deleteButton');

		spyOn(console, 'log');

		deleteButtonElement.click();

		expect(console.log).toHaveBeenCalledWith(`Course: ${course} was deleted!`);
	});
});
