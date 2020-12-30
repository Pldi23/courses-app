import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import * as moment from 'moment';

export function ValidateCreationDate(control: AbstractControl): {[key: string]: any} | null  {
	if (control.value && !moment(control.value, 'DD/MM/YYYY', true).isValid()) {
		return { wrongFormat: 'Date Format not dd/mm/yyyy' };
	}
	return null;
}

@Directive({
  	selector: '[appCreationDateValidator]',
	providers: [{provide: NG_VALIDATORS, useExisting: CreationDateValidatorDirective, multi: true}],

})
export class CreationDateValidatorDirective implements Validator {

	public validate(control: AbstractControl): ValidationErrors | null {
		return ValidateCreationDate;
	}

}
