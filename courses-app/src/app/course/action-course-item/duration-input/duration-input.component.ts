import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  	selector: 'app-duration-input',
  	templateUrl: './duration-input.component.html',
  	styleUrls: ['./duration-input.component.scss', '../action-course-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DurationInputComponent {
	@Input() public duration: number;
	@Output() public  loadLength: EventEmitter<number> = new EventEmitter<number>();

  	public isVisible(): boolean {
  		return typeof this.duration == 'number';
	}

}
