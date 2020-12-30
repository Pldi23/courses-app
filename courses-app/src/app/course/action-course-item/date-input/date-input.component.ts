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
import {ValidateCreationDate} from '../validator/creation-date-validator.directive';

@Component({
  	selector: 'app-date-input',
  	templateUrl: './date-input.component.html',
  	styleUrls: ['./date-input.component.scss', '../action-course-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef((): Type<DateInputComponent> => DateInputComponent),
		multi: true,
	}],
})
export class DateInputComponent implements ControlValueAccessor, OnInit, OnDestroy {

	public formGroup: FormGroup;
	private readonly subscriptions: Subscription[] = [];
	@Output() public getDateStatusChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(private readonly formBuilder: FormBuilder) {}

	public ngOnInit(): void {
		this.formGroup = this.formBuilder.group({
			dateControl: new FormControl('', [Validators.required, ValidateCreationDate]),
		});
		this.subscriptions.push(
			this.formGroup.valueChanges.subscribe((control: any): void => {
				this.onChange(control.dateControl);
				this.getDateStatusChange.emit(this.formGroup.valid);
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
		this.formGroup.setValue({
			dateControl: obj,
		});
	}
}
