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
import {
	ControlValueAccessor,
	FormBuilder,
	FormControl,
	FormGroup,
	NG_VALUE_ACCESSOR,
	Validators,
} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ValidateDuration} from '../validator/duration-validator.directive';

@Component({
  	selector: 'app-duration-input',
  	templateUrl: './duration-input.component.html',
  	styleUrls: ['./duration-input.component.scss', '../action-course-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{
  		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef((): Type<DurationInputComponent> => DurationInputComponent),
		multi: true,
	}],
})
export class DurationInputComponent implements ControlValueAccessor, OnInit, OnDestroy {

	public formGroup: FormGroup;
	private readonly subscriptions: Subscription[] = [];
	@Output() public getDurationStatusChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(private readonly formBuilder: FormBuilder) {}

	public ngOnInit(): void {
		this.formGroup = this.formBuilder.group({
			durationControl: new FormControl('', [Validators.required, ValidateDuration]),
		});
		this.subscriptions.push(
			this.formGroup.valueChanges.subscribe((control: any): void => {
				this.onChange(control.durationControl);
				this.getDurationStatusChange.emit(this.formGroup.valid);
				this.onTouched();
			}),
		);
	}

  	public isVisible(): boolean {
		const value: any = this.formGroup.controls.durationControl.value;
  		return value != null && value != '' && !isNaN(value);
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
			durationControl: obj,
		});
	}

}
