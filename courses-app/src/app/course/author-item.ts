import { IAuthorItem } from './iauthor-item';

export class AuthorItem implements IAuthorItem {
	public id: number;
	public name: string;
	public lastName: string;

	constructor(id?: number, name?: string, lastName?: string) {
		this.id = id;
		this.name = name;
		this.lastName = lastName;
	}
}
