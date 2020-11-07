import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../../course/course-item';

@Pipe({
  name: 'orderByCreationDate',
})
export class OrderByCreationDatePipe implements PipeTransform {
	public transform(items: CourseItem[]): CourseItem[] {
		return items.sort(((a: CourseItem, b: CourseItem): any => (b.creationDate.getTime() - a.creationDate.getTime())));
  }

}
