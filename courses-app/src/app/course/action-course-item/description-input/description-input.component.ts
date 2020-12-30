import {
	forwardRef,
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	OnDestroy,
	OnInit,
	Output,
	Type,
} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  	selector: 'app-description-input',
  	templateUrl: './description-input.component.html',
  	styleUrls: ['./description-input.component.scss', '../action-course-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef((): Type<DescriptionInputComponent> => DescriptionInputComponent),
		multi: true,
	}],
})
export class DescriptionInputComponent implements ControlValueAccessor, OnInit, OnDestroy {

	public formGroup: FormGroup;
	private readonly subscriptions: Subscription[] = [];
	@Output() public getDescriptionStatusChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(private readonly formBuilder: FormBuilder) {}

	public ngOnInit(): void {
		this.formGroup = this.formBuilder.group({
			descriptionControl: new FormControl('', [Validators.required, Validators.maxLength(50)]),
		});
		this.subscriptions.push(
			this.formGroup.valueChanges.subscribe((control: any): void => {
				this.onChange(control.descriptionControl);
				this.getDescriptionStatusChange.emit(this.formGroup.valid);
				this.onTouched();
			}),
		);
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

	public writeValue(obj: any): void {
		if (!obj) {
			return;
		}
		this.formGroup.patchValue({
			descriptionControl: obj,
		});
	}
}
