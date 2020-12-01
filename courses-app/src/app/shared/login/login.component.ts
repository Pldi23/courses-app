import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { TOKEN, USER_NAME } from '../../constant';
import { AuthService } from '../auth.service';

@Component({
  	selector: 'app-login',
  	templateUrl: './login.component.html',
  	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, OnDestroy {
	@Input() public userName: string;
	@Input() public password: string;
	public data: string;
	public url: string;
	public subs: Subscription;

	constructor(private readonly authService: AuthService, private readonly router: Router) {
	}

	public ngOnInit(): void {
		const navigation: Navigation = this.router.getCurrentNavigation();
		if (navigation !== null) {
			const state: any = navigation.extras.state as { data: string, route: string };
			if (state !== undefined) {
				this.data = state.data;
				this.url = state.route;
			}
		}
	}

	public login(): void {
		if (this.userName !== undefined && this.password !== undefined) {
			this.subs = this.authService.login(this.userName, this.password)
				.subscribe((data: any): any => {
						localStorage.setItem(TOKEN, data.token);
						localStorage.setItem(USER_NAME, this.userName);
						const path: string = this.url == null ? '/courses' : this.url;
						this.router.navigate([path]);
					},
					(error: HttpErrorResponse): void => {
						if (error.status === 401) {
							Swal.fire('Bad credentials', 'Please check login and password', 'error');
						}
					});
		}
	}

	public ngOnDestroy(): void {
		this.subs.unsubscribe();
	}
}
