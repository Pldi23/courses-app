import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';
import {AuthorItem} from '../../author-item';

export function ValidateAuthorsSize(control: AbstractControl): { [key: string]: any } | null {
	if (control.value && control.value.length < 1) {
		return {authorsError: 'Should be at least 1 author'};
	}
	return null;
}

export function ValidateDuplicateAuthors(control: AbstractControl): { [key: string]: any } | null {
	const authors: AuthorItem[] = control.value as AuthorItem[];
	const checked: AuthorItem[] = [];
	authors.forEach((a: AuthorItem): void => {
		if (checked.findIndex((author: AuthorItem): boolean => author.name === a.name && author.lastName === a.lastName) < 0) {
			checked.push(a);
		}
	});
	const hasDuplicate: boolean = authors.length !== checked.length;

	if (control.value && hasDuplicate) {
		return {authorsError: 'Duplicate authors not allowed'};
	}
	return null;
}

export function ValidateExistingAuthor(authors: AuthorItem[]): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		if (authors && authors.length > 0) {
			if (control.value &&
				authors.findIndex((a: AuthorItem): boolean =>
					a.name === control.value.name && a.lastName === control.value.lastName) < 0) {
				return {authorsError: `Author ${control.value} not exists`};
			}
			return null;
		}
		return null;
	};
}

@Directive({
	selector: '[appAuthorsValidator]',
	providers: [{provide: NG_VALIDATORS, useExisting: AuthorsValidatorDirective, multi: true}],

})
export class AuthorsValidatorDirective implements Validator {

	public validate(control: AbstractControl): ValidationErrors | null {
		return ValidateAuthorsSize && ValidateDuplicateAuthors;
	}
}
