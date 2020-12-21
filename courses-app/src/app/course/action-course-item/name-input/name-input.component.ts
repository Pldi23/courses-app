import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  	selector: 'app-name-input',
  	templateUrl: './name-input.component.html',
  	styleUrls: ['./name-input.component.scss', '../action-course-item.component.scss'],
})
export class NameInputComponent {

	@Input() public name: string;
	@Output() public loadName: EventEmitter<string> = new EventEmitter<string>();

}
