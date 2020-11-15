import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  	name: 'courseDuration',
})
export class CourseDurationPipe implements PipeTransform {
	public transform(minutes: number): string {
		if (minutes < 60) {
			return `${minutes}min`;
		}
		const hours: number = Math.floor(minutes / 60);
		const mins: number = minutes - hours * 60;
		return `${hours}h ${mins}min`;
  	}

}
