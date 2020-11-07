import { CourseItem } from '../../course/course-item';
import { OrderByCreationDatePipe } from './order-by-creation-date.pipe';

describe('OrderByCreationDatePipe', (): void => {
	it('create an instance', (): void => {
		const pipe: OrderByCreationDatePipe = new OrderByCreationDatePipe();
		const items: CourseItem[] = [
			{id: 1, title: 'Angular lessons', creationDate: new Date(2020, 9, 26), duration: 90, description: 'ENGL', topRated: true},
			{id: 2, title: 'React lessons', creationDate: new Date(2020, 9, 30), duration: 95, description: 'ENGL', topRated: false},
			{id: 3, title: 'TypeScript lessons', creationDate: new Date(2020, 9, 2), duration: 29, description: 'ENGL', topRated: true},
		];
		const expected: CourseItem[] = [
			{id: 2, title: 'React lessons', creationDate: new Date(2020, 9, 30), duration: 95, description: 'ENGL', topRated: false},
			{id: 1, title: 'Angular lessons', creationDate: new Date(2020, 9, 26), duration: 90, description: 'ENGL', topRated: true},
			{id: 3, title: 'TypeScript lessons', creationDate: new Date(2020, 9, 2), duration: 29, description: 'ENGL', topRated: true},

		];
		const actual: CourseItem[] = pipe.transform(items);
		expect(actual).toEqual(expected);
  	});
});
