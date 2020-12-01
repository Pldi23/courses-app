import { CourseItem } from '../../course/course-item';
import { OrderByCreationDatePipe } from './order-by-creation-date.pipe';

describe('OrderByCreationDatePipe', (): void => {
	it('create an instance', (): void => {
		const pipe: OrderByCreationDatePipe = new OrderByCreationDatePipe();
		const items: CourseItem[] = [
			{id: 1, name: 'Angular lessons', date: new Date(2020, 9, 26), length: 90, description: 'ENGL', isTopRated: true, authors: []},
			{id: 2, name: 'React lessons', date: new Date(2020, 9, 30), length: 95, description: 'ENGL', isTopRated: false, authors: []},
			{id: 3, name: 'TypeScript lessons', date: new Date(2020, 9, 2), length: 29, description: 'ENGL', isTopRated: true, authors: []},
		];
		const expected: CourseItem[] = [
			{id: 2, name: 'React lessons', date: new Date(2020, 9, 30), length: 95, description: 'ENGL', isTopRated: false, authors: []},
			{id: 1, name: 'Angular lessons', date: new Date(2020, 9, 26), length: 90, description: 'ENGL', isTopRated: true, authors: []},
			{id: 3, name: 'TypeScript lessons', date: new Date(2020, 9, 2), length: 29, description: 'ENGL', isTopRated: true, authors: []},

		];
		const actual: CourseItem[] = pipe.transform(items);
		expect(actual).toEqual(expected);
  	});
});
