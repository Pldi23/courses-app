import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  	selector: 'app-date-input',
  	templateUrl: './date-input.component.html',
  	styleUrls: ['./date-input.component.scss', '../action-course-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateInputComponent {

	@Input() public creationDate: Date;
	@Output() public  loadDate: EventEmitter<Date> = new EventEmitter<Date>();

}
