import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  	providedIn: 'root',
})
export class HeaderBehaviorService {

	private readonly refresh: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	public getRefresh(): Observable<boolean> {
		return this.refresh.asObservable();
	}

	public setRefresh(value: boolean): void {
		this.refresh.next(value);
	}
}
