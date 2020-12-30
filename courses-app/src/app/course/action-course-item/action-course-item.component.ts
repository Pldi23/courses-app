import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CancelCourseItem, GetCourse, SaveCourse } from '../../shared/store/action/courseitem.actions';
import { selectCourseItemState, IAppState } from '../../shared/store/app.state';
import { ICourseItemState } from '../../shared/store/reduce/courseitem.reducer';
import { AuthorItem } from '../author-item';
import { CourseItem } from '../course-item';

interface IFormValid {
	nameValid: boolean;
	descriptionValid: boolean;
	durationValid: boolean;
	creationDateValid: boolean;
	authorsValid: boolean;
}

@Component({
	selector: 'app-add-edit-course',
	templateUrl: './action-course-item.component.html',
	styleUrls: ['./action-course-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionCourseItemComponent implements OnInit {
	public course$: Observable<CourseItem>;
	public courseForm: FormGroup;
	public formValid: IFormValid;

	constructor(private readonly store: Store<IAppState>,
				private readonly route: ActivatedRoute,
				private readonly formBuilder: FormBuilder) {
	}

	public ngOnInit(): void {
		const id: string = this.route.snapshot.paramMap.get('id');
		this.store.dispatch(new GetCourse({id: id}));
		this.course$ = this.store.select(selectCourseItemState).pipe(
			map((state: ICourseItemState): CourseItem => state.course),
			tap((course: CourseItem): void => {
				const durationVal: number | undefined = course ? course.length : undefined;
				const dateVal: string | undefined = course ? moment(course.date).format('DD/MM/YYYY') : undefined;
				const nameVal: string | undefined = course ? course.name : undefined;
				const descriptionVal: string | undefined = course ? course.description : undefined;
				const authorsVal: AuthorItem[] | undefined = course ? course.authors : undefined;
				this.courseForm = this.formBuilder.group({
					nameControl: nameVal,
					descriptionControl: descriptionVal,
					durationControl: durationVal,
					dateControl: dateVal,
					authorsControl: this.formBuilder.control(authorsVal),
				});
				this.formValid = {
					nameValid: !!nameVal,
					descriptionValid: !!descriptionVal,
					durationValid: !!durationVal,
					creationDateValid: !!dateVal,
					authorsValid: !!authorsVal,
				};
			}),
		);
	}

	public cancel(): void {
		this.store.dispatch(new CancelCourseItem({}));
	}

	private save(course?: CourseItem): void {
		this.store.dispatch(new SaveCourse(course));
	}

	public allValid(): boolean {
		return this.formValid.nameValid
			&& this.formValid.descriptionValid
			&& this.formValid.creationDateValid
			&& this.formValid.durationValid
			&& this.formValid.authorsValid;
	}

	public setNameValid(isValid: boolean): void {
		this.formValid.nameValid = isValid;
	}

	public setDescriptionValid(isValid: boolean): void {
		this.formValid.descriptionValid = isValid;
	}

	public setDurationValid(isValid: boolean): void {
		this.formValid.durationValid = isValid;
	}

	public setDateValid(isValid: boolean): void {
		this.formValid.creationDateValid = isValid;
	}

	public setAuthorsValid(isValid: boolean): void {
		this.formValid.authorsValid = isValid;
	}

	public onFormSubmit(id: number): void {
		const course: CourseItem = new CourseItem(
			id,
			this.courseForm.controls.nameControl.value,
			this.courseForm.controls.descriptionControl.value,
			moment(this.courseForm.controls.dateControl.value, 'DD/MM/YYYY').toDate(),
			this.courseForm.controls.durationControl.value,
			false,
			this.courseForm.controls.authorsControl.value,
			);
		this.save(course);
		this.store.dispatch(new CancelCourseItem({}));
	}
}
