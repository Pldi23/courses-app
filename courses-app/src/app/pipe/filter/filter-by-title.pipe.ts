import { Pipe, PipeTransform } from '@angular/core';
import {CourseItem} from '../../course/course-item';

@Pipe({
  name: 'filterByTitle',
})
export class FilterByTitlePipe implements PipeTransform {
	public transform(items: CourseItem[], title: string): CourseItem[] {
		return items.filter((course: CourseItem): boolean => course.title.toLowerCase().includes(title.trim().toLowerCase()));
  }

}
