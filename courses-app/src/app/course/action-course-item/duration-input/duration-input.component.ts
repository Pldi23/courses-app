import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  	selector: 'app-duration-input',
  	templateUrl: './duration-input.component.html',
  	styleUrls: ['./duration-input.component.scss', '../action-course-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DurationInputComponent implements OnInit {
	@Input() public duration: number;
  	constructor() { }

  	public ngOnInit(): void {
  	}

  	public isVisible(): boolean {
  		return typeof this.duration == 'number';
	}

}
