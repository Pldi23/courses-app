import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';
import { LogOut } from '../store/action/auth.actions';
import { selectAuthState, IAppState } from '../store/app.state';
import { IState } from '../store/reduce/auth.reducers';
import { UserEntity } from '../user-entity';

interface ILanguage {
	locale: string;
	image: string;
}

const ruLang: ILanguage = {
	locale: 'ru',
	image: 'rus.png',
};
const engLang: ILanguage = {
	locale: 'en',
	image: 'us.png',
};

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
	private subs: Subscription[] = [];
	public locale: string;
	public languages: ILanguage[] = [ruLang, engLang];

  	constructor(private readonly changeDetectorRef: ChangeDetectorRef,
				private readonly store: Store<IAppState>,
				private readonly translateService: TranslateService) {
	}

  	public ngOnInit(): void {
		this.getState = this.store.select(selectAuthState);
		this.subs.push(this.getState.subscribe((state: IState): void => {
			this.isAuthenticated = state.isAuthenticated;
			this.user = state.user;
			this.changeDetectorRef.markForCheck();
		}));
		this.locale = this.translateService.currentLang;
		this.subs.push(this.translateService.onLangChange.subscribe((event: LangChangeEvent): void => {
			this.locale = event.lang;
		}));
  	}

  	public logout(): void {
  		this.store.dispatch(new LogOut({}));
	}

	public onLocale(value: string): void {
  		localStorage.setItem('locale', value);
  		this.translateService.use(value);
		this.locale = this.translateService.currentLang;
	}

	public ngOnDestroy(): void {
  		this.subs.forEach((s: Subscription): void => s.unsubscribe());
	}

}
