import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  	selector: 'app-duration-input',
  	templateUrl: './duration-input.component.html',
  	styleUrls: ['./duration-input.component.scss', '../action-course-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DurationInputComponent {
	@Input() public duration: number;

  	public isVisible(): boolean {
  		return typeof this.duration == 'number';
	}

}
