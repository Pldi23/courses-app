import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  	selector: 'app-header',
  	templateUrl: './header.component.html',
  	styleUrls: ['./header.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, DoCheck {
	public userName: string;
	public isAuthenticated: boolean;

  	constructor(private readonly authService: AuthService,
				private readonly ref: ChangeDetectorRef,
				private readonly router: Router) {
	}

  	public ngOnInit(): void {
  		this.userName = this.authService.getUserInfo();
  		this.isAuthenticated = this.authService.isAuthenticated();
  	}
  	public logout(): void {
  		this.authService.logout();
	}
	public ngDoCheck(): void {
		this.userName = this.authService.getUserInfo();
		this.isAuthenticated = this.authService.isAuthenticated();
		this.ref.markForCheck();
	}
	public shouldShowLogin(): boolean {
  		return !this.isAuthenticated && this.router.url !== '/login';
	}

}
