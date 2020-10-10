import {ICourseItem} from './icourse-item';

export class CourseItem implements ICourseItem {
  public creationDate: string;
  public description: string;
  public duration: string;
  public id: number;
  public title: string;
}
