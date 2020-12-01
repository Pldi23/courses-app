import { AuthorItem } from './author-item';
import { ICourseItem } from './icourse-item';

export class CourseItem implements ICourseItem {
  	public date: Date;
  	public description: string;
  	public length: number;
  	public id: number;
  	public name: string;
  	public isTopRated: boolean;
  	public authors: AuthorItem[];

	constructor(id?: number, name?: string, description?: string, date?: Date, length?: number, isTopRated?: boolean, authors?: AuthorItem[]) {
		this.date = date;
		this.description = description;
		this.length = length;
		this.id = id;
		this.name = name;
		this.isTopRated = isTopRated;
		this.authors = authors;
	}
}
