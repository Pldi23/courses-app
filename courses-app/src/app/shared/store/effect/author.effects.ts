import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ofType, Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {of, Observable} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {AuthorItem} from '../../../course/author-item';
import {AuthorItemsService} from '../../../course/author-items.service';
import {AuthorActionTypes, GetAuthorsList, GetAuthorsListFailure, GetAuthorsListSuccess} from '../action/author.action';

@Injectable()
export class AuthorEffects {

	constructor(private readonly actions: Actions, private readonly authorService: AuthorItemsService) {}

	@Effect()
	public GetList: Observable<Action> = this.actions.pipe(
		ofType(AuthorActionTypes.GET_AUTHORS_LIST),
		map((action: GetAuthorsList): any => action.payload),
		switchMap((payload: any): Observable<Action> => {
			return this.authorService.getList(payload.searchText).pipe(
				map((authors: AuthorItem[]): Action => {
					return new GetAuthorsListSuccess({authors: authors});
				}),
				catchError((error: HttpErrorResponse): Observable<Action> => {
					return of(new GetAuthorsListFailure({ message: error.message }));
				}));
		}),
	);

}
