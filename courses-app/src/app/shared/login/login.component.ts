import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	@Input() public userName: string;
	@Input() public password: string;
	constructor(private  readonly authService: AuthService, private readonly router: Router) { }
	public ngOnInit(): void {
  	}

  	public login(): void {
		if (this.userName !== undefined && this.password !== undefined) {
			this.authService.login(this.userName, this.password);
			this.router.navigate(['/courses']);
		}
	}

}
