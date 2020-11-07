import { ICourseItem } from './icourse-item';

export class CourseItem implements ICourseItem {
  	public creationDate: Date;
  	public description: string;
  	public duration: number;
  	public id: number;
  	public title: string;
  	public topRated: boolean;
}
