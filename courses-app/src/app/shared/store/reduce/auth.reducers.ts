import { UserEntity } from '../../user-entity';
import { All, AuthActionTypes} from '../action/auth.actions';

export interface IState {
	isAuthenticated: boolean;
	user: UserEntity | null;
	token: string | null;
	errorMessage: string | null;
}

export const initialState: IState = {
	isAuthenticated: false,
	user: null,
	token: null,
	errorMessage: null,
};

export function authReducer(state: IState = initialState, action: All): IState {
	switch (action.type) {
		case AuthActionTypes.LOGIN:
			return {
				...state,
				errorMessage: null,
			};
		case AuthActionTypes.LOGIN_SUCCESS: {
			return {
				...state,
				isAuthenticated: true,
				token: action.payload.token,
			};
		}
		case AuthActionTypes.LOGIN_FAILURE: {
			return {
				...state,
				errorMessage: 'LOGIN.FAILED',
			};
		}
		case AuthActionTypes.LOGOUT: {
			return initialState;
		}
		case AuthActionTypes.GET_USER_INFO: {
			return state;
		}
		case AuthActionTypes.GET_USER_INFO_SUCCESS: {
			return {
				...state,
				user: action.payload,
			};
		}
		case AuthActionTypes.GET_USER_INFO_FAILURE: {
			return {
				...state,
				errorMessage: 'LOGIN.USER.FAILED',
			};
		}
		case AuthActionTypes.LOGIN_REQUIRED: {
			return {
				...state,
				errorMessage: 'LOGIN.ACCESS.FAILED',
			};
		}
		default: {
			return state;
		}
	}
}
