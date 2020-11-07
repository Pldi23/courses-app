import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CourseCreationDateBorderDirective } from './course-creation-date-border.directive';

describe('CourseCreationDateBorderDirective', (): void => {
	const mockElementRef: ElementRef = {
		nativeElement: {
			style: {
				borderColor: 'white',
			},
		},
	};

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			declarations: [ CourseCreationDateBorderDirective ],
			providers: [{ provide: ElementRef, useValue: mockElementRef }],
		}).compileComponents();
	});
	it('should create an instance', (): void => {
  		const directive: CourseCreationDateBorderDirective = new CourseCreationDateBorderDirective(mockElementRef);
  		expect(directive).toBeTruthy();
  	});
	it('should set border color as green when creation date ten days ago', (): void => {
		const directive: CourseCreationDateBorderDirective = new CourseCreationDateBorderDirective(mockElementRef);
		directive.creationDate = new Date(new Date().getTime() - 10 * 24 * 60 * 60 * 1000);
		directive.ngOnChanges();
		expect(mockElementRef.nativeElement.style.borderColor).toEqual('green');
	});
	it('should set border color as blue when creation date tomorrow', (): void => {
		const directive: CourseCreationDateBorderDirective = new CourseCreationDateBorderDirective(mockElementRef);
		directive.creationDate = new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000);
		directive.ngOnChanges();
		expect(mockElementRef.nativeElement.style.borderColor).toEqual('blue');
	});
});
