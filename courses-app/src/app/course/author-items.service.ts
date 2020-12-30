import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AUTHOR_PATH} from '../constant';
import {AuthorItem} from './author-item';

@Injectable({
  	providedIn: 'root',
})
export class AuthorItemsService {

  	constructor(private readonly http: HttpClient) { }

	public getList(text: string): Observable<AuthorItem[]> {
		const path: string = `${AUTHOR_PATH}`;
		let params: HttpParams = new HttpParams();
		if (text !== undefined) {
			params = params.set('textFragment', text);
		}
		return this.http.get<AuthorItem[]>(path, {params: params});
	}
}
