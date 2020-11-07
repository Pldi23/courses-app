import { CourseDurationPipe } from './course-duration.pipe';

describe('CourseDurationPipe', (): void => {
	it('create an instance', (): void => {
		const pipe: CourseDurationPipe = new CourseDurationPipe();
		expect(pipe).toBeTruthy();
  	});
	it('should transform to n min when minutes less then hour', (): void => {
		const pipe: CourseDurationPipe = new CourseDurationPipe();
		const actual: string = pipe.transform(50);
		expect(actual).toEqual('50min');
	});
	it('should transform to m hours n min when minutes more then hour', (): void => {
		const pipe: CourseDurationPipe = new CourseDurationPipe();
		const actual: string = pipe.transform(70);
		expect(actual).toEqual('1h 10min');
	});
});
