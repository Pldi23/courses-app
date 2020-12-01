import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../../course/course-item';

@Pipe({
  name: 'orderByCreationDate',
})
export class OrderByCreationDatePipe implements PipeTransform {
	public transform(items: CourseItem[]): CourseItem[] {
		return items.length > 1 ?
			items.sort(((a: CourseItem, b: CourseItem): number => (new Date(b.date).getTime() - new Date(a.date).getTime()))) :
			items;
  }

}
