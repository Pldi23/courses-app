import { Pipe, PipeTransform } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Pipe({
  	name: 'courseDuration',
})
export class CourseDurationPipe implements PipeTransform {

	constructor(private translateService: TranslateService) {
	}

	public transform(minutes: number): string {
		const min: string = this.translateService.instant('TIME.MINUTES');
		const hour: string = this.translateService.instant('TIME.HOURS');
		if (minutes < 60) {
			return `${minutes}`;
		}
		const hours: number = Math.floor(minutes / 60);
		const mins: number = minutes - hours * 60;
		return `${hours}:${mins}`;
  	}

}
