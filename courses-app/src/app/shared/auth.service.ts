import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

	constructor() { }

	public login(userName: string, password: string): void {
		if (userName !== null && password !== null) {
			localStorage.setItem(CURRENT_USER, userName);
		}
	}
	public logout(): void {
		localStorage.removeItem(CURRENT_USER);
	}
	public isAuthenticated(): boolean {
		return localStorage.getItem(CURRENT_USER) !== null;
	}
	public getUserInfo(): string {
		return localStorage.getItem(CURRENT_USER);
	}
}

const CURRENT_USER: string = 'currentUser';
