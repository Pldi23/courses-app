import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  	selector: 'app-description-input',
  	templateUrl: './description-input.component.html',
  	styleUrls: ['./description-input.component.scss', '../action-course-item.component.scss'],
})
export class DescriptionInputComponent {

	@Input() public description: string;
	@Output() public loadDesc: EventEmitter<string> = new EventEmitter<string>();

}
