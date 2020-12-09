import { Pipe, PipeTransform } from '@angular/core';
import { AuthorItem } from '../../course/author-item';

@Pipe({
  	name: 'authorName',
})
export class AuthorNamePipe implements PipeTransform {

  	public transform(author: AuthorItem): string {
		return `${author.name} ${author.lastName}`;
  	}

}
