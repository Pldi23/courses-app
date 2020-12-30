import {AuthorItem} from '../../../course/author-item';
import {All, AuthorActionTypes} from '../action/author.action';

export interface IAuthorState {
	authors: AuthorItem[];
	searchText: string;
	message: string;
}

export const initialState: IAuthorState = {
	authors: [],
	searchText: '',
	message: null,
};

export function authorsReducer(state: IAuthorState = initialState, action: All): IAuthorState {
	switch (action.type) {
		case AuthorActionTypes.GET_AUTHORS_LIST: {
			return {
				...state,
				searchText: action.payload.searchText,
			};
		}
		case AuthorActionTypes.GET_AUTHORS_LIST_SUCCESS: {
			return {
				...state,
				authors: action.payload.authors,
			};
		}
		case AuthorActionTypes.GET_AUTHORS_LIST_FAILURE: {
			return {
				...state,
				message: action.payload.error,
			};
		}
		default: {
			return state;
		}
	}
}
