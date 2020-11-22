import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  	selector: 'app-login',
  	templateUrl: './login.component.html',
  	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
	@Input() public userName: string;
	@Input() public password: string;
	public data: string;
	public url: string;
	constructor(private  readonly authService: AuthService, private readonly router: Router) {
		const navigation: Navigation = this.router.getCurrentNavigation();
		const state: any = navigation.extras.state as {data: string, route: string};
		if (state !== undefined) {
			this.data = state.data;
			this.url = state.route;
		}
	}

  	public login(): void {
		if (this.userName !== undefined && this.password !== undefined) {
			this.authService.login(this.userName, this.password);
			const path: string = this.url == null ? '/courses' : this.url;
			this.router.navigate([path]);
		}
	}

}
