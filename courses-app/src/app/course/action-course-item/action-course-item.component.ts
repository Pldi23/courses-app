import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CancelCourseItem, GetCourse, ModifyCourseItem, SaveCourse } from '../../shared/store/action/courseitem.actions';
import { selectCourseItemState, IAppState } from '../../shared/store/app.state';
import { ICourseItemState } from '../../shared/store/reduce/courseitem.reducer';
import { AuthorItem } from '../author-item';
import { CourseItem } from '../course-item';

@Component({
	selector: 'app-add-edit-course',
	templateUrl: './action-course-item.component.html',
	styleUrls: ['./action-course-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionCourseItemComponent implements OnInit {
	@Input() public course$: Observable<CourseItem>;
	@Input() public name: string;

	constructor(private readonly store: Store<IAppState>,
				private readonly route: ActivatedRoute) {
	}

	public ngOnInit(): void {
		const id: string = this.route.snapshot.paramMap.get('id');
		this.store.dispatch(new GetCourse({id: id}));
		this.course$ = this.store.select(selectCourseItemState).pipe(
			map((state: ICourseItemState): CourseItem => state.course));
	}

	public cancel(): void {
		this.store.dispatch(new CancelCourseItem({}));
	}

	public save(course?: CourseItem): void {
		this.store.dispatch(new SaveCourse(course));
	}

	public loadName(name: string, course: CourseItem): void {
		const copy: CourseItem = Object.assign({}, course);
		copy.name = name;
		this.store.dispatch(new ModifyCourseItem({ course: copy }));
	}

	public loadDescription(description: string, course: CourseItem): void {
		const copy: CourseItem = Object.assign({}, course);
		copy.description = description;
		this.store.dispatch(new ModifyCourseItem({ course: copy }));
	}

	public loadDuration(duration: number, course: CourseItem): void {
		const copy: CourseItem = Object.assign({}, course);
		copy.length = duration;
		this.store.dispatch(new ModifyCourseItem({ course: copy }));
	}

	public loadDate(date: Date, course: CourseItem): void {
		const copy: CourseItem = Object.assign({}, course);
		copy.date = date;
		this.store.dispatch(new ModifyCourseItem({ course: copy }));
	}

	public loadAuthors(authors: AuthorItem[], course: CourseItem): void {
		const copy: CourseItem = Object.assign({}, course);
		copy.authors = authors;
		this.store.dispatch(new ModifyCourseItem({ course: copy }));
	}
}
