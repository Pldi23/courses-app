import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  	selector: 'app-date-input',
  	templateUrl: './date-input.component.html',
  	styleUrls: ['./date-input.component.scss', '../action-course-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateInputComponent implements OnInit {

	@Input() public creationDate: Date;

  	public ngOnInit(): void {
  	}

}
