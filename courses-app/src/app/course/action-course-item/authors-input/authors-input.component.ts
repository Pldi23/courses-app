import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {AuthorItem} from '../../author-item';

@Component({
	selector: 'app-authors-input',
	templateUrl: './authors-input.component.html',
	styleUrls: ['./authors-input.component.scss', '../action-course-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsInputComponent {

	@Input() public authors: AuthorItem[] = [];
	@Output() public loadAuthors: EventEmitter<AuthorItem[]> = new EventEmitter<AuthorItem[]>();

}
