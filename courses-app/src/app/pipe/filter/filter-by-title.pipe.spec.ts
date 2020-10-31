import {CourseItem} from '../../course/course-item';
import { FilterByTitlePipe } from './filter-by-title.pipe';

describe('FilterByTitlePipe', (): void => {
	it('create an instance', (): void => {
		const pipe: FilterByTitlePipe = new FilterByTitlePipe();
		expect(pipe).toBeTruthy();
  	});
	it('should filter items by title when courseItems array passed', (): void => {
		const pipe: FilterByTitlePipe = new FilterByTitlePipe();
		const items: CourseItem[] = [
			{id: 1, title: 'Angular lessons', creationDate: new Date(2020, 9, 26), duration: 90, description: 'ENGL', topRated: true},
			{id: 2, title: 'React lessons', creationDate: new Date(2020, 9, 30), duration: 95, description: 'ENGL', topRated: false},
		];
		const text: string = 'Ang';
		const actual: CourseItem[] = pipe.transform(items, text);
		const expected: CourseItem[] = [
			{id: 1, title: 'Angular lessons', creationDate: new Date(2020, 9, 26), duration: 90, description: 'ENGL', topRated: true},
		];
		expect(actual).toEqual(expected);
	});
});
