import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  	providedIn: 'root',
})
export class LoaderService {

  	public readonly isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
