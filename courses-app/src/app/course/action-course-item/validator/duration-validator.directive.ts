import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

export function ValidateDuration(control: AbstractControl): {[key: string]: any} | null  {
	if (control.value && isNaN(control.value)) {
		return { wrongDuration: 'Not a number' };
	}
	return null;
}

@Directive({
	selector: '[appDurationValidator]',
	providers: [{provide: NG_VALIDATORS, useExisting: DurationValidatorDirective, multi: true}],
})
export class DurationValidatorDirective implements Validator {
	public validate(control: AbstractControl): ValidationErrors | null {
		return ValidateDuration;
	}
}
