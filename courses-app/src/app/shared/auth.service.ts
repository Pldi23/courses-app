import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LOGIN_PATH, TOKEN, USER_INFO_PATH, USER_NAME } from '../constant';
import { UserEntity } from './user-entity';

@Injectable({
	providedIn: 'root',
})
export class AuthService {

	constructor(private readonly http: HttpClient) {
	}

	public login(userName: string, password: string): Observable<string> {
		const credentials: any = {
			login: userName,
			password: password,
		};
		return this.http.post<string>(LOGIN_PATH, credentials);
	}

	public logout(): void {
		localStorage.removeItem(TOKEN);
		localStorage.removeItem(USER_NAME);
	}

	public isAuthenticated(): boolean {
		return localStorage.getItem(TOKEN) != null;
	}
	public getUserName(): string {
		return localStorage.getItem(USER_NAME);
	}

	public getUserInfo(): Observable<UserEntity> {
		const token: any = {
			token: localStorage.getItem(TOKEN),
		};
		return this.http.post<UserEntity>(USER_INFO_PATH, token)
			.pipe(map((data: any): UserEntity =>
				new UserEntity(data.id, data.name.first, data.name.last, data.login, null)));
	}
}
