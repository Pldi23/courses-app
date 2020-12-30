import {
	forwardRef,
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
	Type,
} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AuthorItem} from '../../author-item';
import {ValidateExistingAuthor} from '../validator/authors-validator.directive';

@Component({
	selector: 'app-author-tag',
	templateUrl: './author-tag.component.html',
	styleUrls: ['./author-tag.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef((): Type<AuthorTagComponent> => AuthorTagComponent),
		multi: true,
	}],
})
export class AuthorTagComponent implements ControlValueAccessor, OnInit, OnDestroy {

	@Input() public isNew: boolean;
	@Input() public allAuthors: AuthorItem[];
	public suggestions: FormGroup[] = [];
	public form: FormGroup;
	private readonly subscriptions: Subscription[] = [];
	@Output() public delete: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
	@Output() public add: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
	@Output() public dirtyOrTouched: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(private readonly formBuilder: FormBuilder) {
	}

	public ngOnInit(): void {
		this.form = this.formBuilder.group({
			tag: new FormControl('', [ValidateExistingAuthor(this.allAuthors)]),
		});
		this.subscriptions.push(
			this.form.valueChanges.subscribe((control: any): void => {
				this.onChange(control.tag);
				this.onTouched();
			}),
		);
	}

	public suggest(): void {
		if (this.isNew) {
			if (this.form.controls.tag.value === null || this.form.controls.tag.value === '') {
				this.suggestions = [];
			} else {
				this.suggestions = this.allAuthors
					.map((value: AuthorItem): FormGroup => this.formBuilder.group({
						tag: new FormControl(value.name),
					}))
					.filter((fg: FormGroup): boolean =>
						fg.controls.tag.value.toLowerCase().startsWith(this.form.controls.tag.value.toLowerCase()));
			}
		}
	}

	public clearSuggestions(): void {
		this.suggestions = [];
	}

	public clearForm(): void {
		this.form.patchValue({
			tag: '',
		});
	}

	public isMatched(): boolean {
		return this.suggestions.length === 1 && this.suggestions[0].controls.tag.value === this.form.controls.tag.value;
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
		isDisabled ? this.form.disable() : this.form.enable();
	}

	public writeValue(obj: any): void {
		if (!obj) {
			return;
		}
		this.form.patchValue({
			tag: this.mapAuthor(obj),
		});
	}

	private mapAuthor(author: AuthorItem): string {
		return `${author.name} ${author.lastName}`;
	}

}
