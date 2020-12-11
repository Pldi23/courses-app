import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {TOKEN} from '../../constant';
import { AuthService } from '../auth.service';
import {UserEntity} from '../user-entity';
import {HeaderBehaviorService} from './header-behavior.service';

@Component({
  	selector: 'app-header',
  	templateUrl: './header.component.html',
  	styleUrls: ['./header.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
	public user: UserEntity;
	public isAuthenticated: boolean;

  	constructor(private readonly authService: AuthService,
				private readonly ref: ChangeDetectorRef,
				private readonly router: Router,
				private readonly headerService: HeaderBehaviorService) {
	}

  	public ngOnInit(): void {
  		this.headerService.getRefresh().subscribe((value: boolean): void => {
  			if (value && localStorage.getItem(TOKEN)) {
  				this.authService.getUserInfo().subscribe((user: UserEntity): void => {
  					this.user = user;
  					this.isAuthenticated = this.authService.isAuthenticated();
  					this.ref.markForCheck();
  				});
  			}
  		});
  		this.headerService.setRefresh(true);
  	}

  	public logout(): void {
  		this.headerService.setRefresh(false);
  		this.authService.logout();
	}

}
