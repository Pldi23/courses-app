import {CourseItem} from '../../course/course-item';
import { FilterByTitlePipe } from './filter-by-title.pipe';

describe('FilterByTitlePipe', (): void => {
	it('create an instance', (): void => {
		const pipe: FilterByTitlePipe = new FilterByTitlePipe();
		expect(pipe).toBeTruthy();
  	});
	it('should filter items by name when courseItems array passed', (): void => {
		const pipe: FilterByTitlePipe = new FilterByTitlePipe();
		const items: CourseItem[] = [
			{id: 1, name: 'Angular lessons', date: new Date(2020, 9, 26), length: 90, description: 'ENGL', isTopRated: true, authors: []},
			{id: 2, name: 'React lessons', date: new Date(2020, 9, 30), length: 95, description: 'ENGL', isTopRated: false, authors: []},
		];
		const text: string = 'Ang';
		const actual: CourseItem[] = pipe.transform(items, text);
		const expected: CourseItem[] = [
			{id: 1, name: 'Angular lessons', date: new Date(2020, 9, 26), length: 90, description: 'ENGL', isTopRated: true, authors: []},
		];
		expect(actual).toEqual(expected);
	});
});
