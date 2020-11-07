import {
	Component,
	DoCheck,
	OnInit,
} from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  	selector: 'app-header',
  	templateUrl: './header.component.html',
  	styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, DoCheck {
	public userName: string;
	public isAuthenticated: boolean;

  	constructor(private readonly authService: AuthService) { }

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
	}

}
