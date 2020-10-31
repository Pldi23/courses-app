import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appCourseCreationDateBorder]',
})
export class CourseCreationDateBorderDirective implements OnChanges {

	@Input('appCourseCreationDateBorder') public creationDate: Date;

	constructor(private readonly element: ElementRef) {
	}

	public ngOnChanges(): void {
		const today: Date = new Date();
		const todayMinus14Days: Date = new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000);
		if (this.creationDate < today && this.creationDate >= todayMinus14Days) {
			this.element.nativeElement.style.borderColor = 'green';
		}
		if (this.creationDate > today) {
			this.element.nativeElement.style.borderColor = 'blue';
		}
	}
}
