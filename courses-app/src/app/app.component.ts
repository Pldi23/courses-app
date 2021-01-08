import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  	public title: string = 'courses-app';
	constructor(private translateService: TranslateService) {}

	public ngOnInit(): void {
		const locale: string = localStorage.getItem('locale');
		this.translateService.use(locale ? locale : environment.defaultLocale);
	}
}
