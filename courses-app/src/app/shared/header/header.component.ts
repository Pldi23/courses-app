import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LogOut } from '../store/action/auth.actions';
import { selectAuthState, IAppState } from '../store/app.state';
import { IState } from '../store/reduce/auth.reducers';
import { UserEntity } from '../user-entity';

@Component({
  	selector: 'app-header',
  	templateUrl: './header.component.html',
  	styleUrls: ['./header.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
	public user: UserEntity;
	public isAuthenticated: boolean;
	public getState: Observable<IState>;
	private sub: Subscription;

  	constructor(private readonly changeDetectorRef: ChangeDetectorRef,
				private readonly store: Store<IAppState>) {
	}

  	public ngOnInit(): void {
		this.getState = this.store.select(selectAuthState);
		this.sub = this.getState.subscribe((state: IState): void => {
			this.isAuthenticated = state.isAuthenticated;
			this.user = state.user;
			this.changeDetectorRef.markForCheck();
		});
  	}

  	public logout(): void {
  		this.store.dispatch(new LogOut({}));
	}

	public ngOnDestroy(): void {
  		this.sub.unsubscribe();
	}

}
