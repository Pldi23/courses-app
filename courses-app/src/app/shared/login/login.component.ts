import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription} from 'rxjs';
import { LogIn } from '../store/action/auth.actions';
import { selectAuthState, IAppState } from '../store/app.state';
import { IState } from '../store/reduce/auth.reducers';

@Component({
  	selector: 'app-login',
  	templateUrl: './login.component.html',
  	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
	@Input() public userName: string;
	@Input() public password: string;
	public subs: Subscription;
	public getState: Observable<any>;
	public errorMessage: string | null;

	constructor(private readonly store: Store<IAppState>) {}

	public ngOnInit(): void {
		this.getState = this.store.select(selectAuthState);
		this.subs = this.getState.subscribe((state: IState): void => {
			this.errorMessage = state.errorMessage;
		});
	}

	public login(): void {
		if (this.userName !== undefined && this.password !== undefined) {
			const payload: any = {
				username: this.userName,
				password: this.password,
			};
			this.store.dispatch(new LogIn(payload));
		}
	}

	public ngOnDestroy(): void {
		this.subs.unsubscribe();
	}
}
