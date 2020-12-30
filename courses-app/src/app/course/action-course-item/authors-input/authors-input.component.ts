import {forwardRef, ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output, Type} from '@angular/core';
import {ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {GetAuthorsList} from '../../../shared/store/action/author.action';
import {selectAuthorState, IAppState} from '../../../shared/store/app.state';
import {IAuthorState} from '../../../shared/store/reduce/author.reducer';
import {AuthorItem} from '../../author-item';
import {ValidateAuthorsSize, ValidateDuplicateAuthors} from '../validator/authors-validator.directive';

@Component({
	selector: 'app-authors-input',
	templateUrl: './authors-input.component.html',
	styleUrls: ['./authors-input.component.scss', '../action-course-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef((): Type<AuthorsInputComponent> => AuthorsInputComponent),
		multi: true,
	}],
})
export class AuthorsInputComponent implements ControlValueAccessor, OnInit, OnDestroy {

	public allAuthors$: Observable<AuthorItem[]>;
	@Output() public getAuthorsStatusChange: EventEmitter<Boolean> = new EventEmitter<Boolean>();
	public formGroup: FormGroup;
	private readonly subscriptions: Subscription[] = [];
	public isDirtyOrTouchedInputElement: boolean;

	constructor(private readonly formBuilder: FormBuilder, private readonly store: Store<IAppState>) {}

	public ngOnInit(): void {
		this.store.dispatch(new GetAuthorsList({searchText: ''}));
		this.allAuthors$ = this.store.select(selectAuthorState).pipe(
			map((state: IAuthorState): AuthorItem[] => state.authors),
		);
		this.formGroup = this.formBuilder.group({
			authors: this.formBuilder.array([], [ValidateAuthorsSize, ValidateDuplicateAuthors]),
		});
		this.subscriptions.push(
			this.formGroup.valueChanges.subscribe((control: any): void => {
				this.onChange(control.authors);
				this.getAuthorsStatusChange.emit(this.formGroup.valid);
				this.onTouched();
			}),
		);
	}

	private get authors(): FormArray {
		return this.formGroup.get('authors') as FormArray;
	}

	public removeAuthor(index: number): void {
		this.authors.removeAt(index);
	}

	private addAuthor(author: AuthorItem): void {
		this.authors.push(
			this.formBuilder.control({id: author.id, name: author.name, lastName: author.lastName}));
	}

	public isDirtyOrTouched(value: boolean): void {
		this.isDirtyOrTouchedInputElement = value;
	}

	public addAuthorForm(form: FormGroup): void {
		const tagValue: string = form.controls.tag.value;
		if (tagValue !== null) {
			const names: string[] = tagValue.split(' ');
			const author: AuthorItem = new AuthorItem(null, names[0], names[1]);
			this.addAuthor(author);
		}
		form.reset();
	}

	public ngOnDestroy(): void {
		this.subscriptions.forEach((s: Subscription): void => s.unsubscribe());
	}

	private onChange: any = () => {};
	private onTouched: any = () => {};

	public registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	public setDisabledState(isDisabled: boolean): void {
		isDisabled ? this.formGroup.disable() : this.formGroup.enable();
	}

	public writeValue(obj: AuthorItem[]): void {
		if (!obj) {
			return;
		}
		obj.forEach((author: AuthorItem): void => this.addAuthor(author));
	}

}
