import {IAuthorItem} from './iauthor-item';

export interface ICourseItem {
  	date: Date;
  	description: string;
  	length: number;
  	id: number;
  	name: string;
  	isTopRated: boolean;
  	authors: IAuthorItem[];
}
