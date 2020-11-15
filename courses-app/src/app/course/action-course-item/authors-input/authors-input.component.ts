import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  	selector: 'app-authors-input',
  	templateUrl: './authors-input.component.html',
  	styleUrls: ['./authors-input.component.scss', '../action-course-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsInputComponent implements OnInit {

  	public ngOnInit(): void {
  	}

}
