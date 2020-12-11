import { Component } from '@angular/core';
import {LoaderService} from '../loader.service';

@Component({
  	selector: 'app-loader',
  	templateUrl: './loader.component.html',
  	styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {

	public loading: boolean;

	constructor(private readonly loaderService: LoaderService) {

		this.loaderService.isLoading.subscribe((v: any): any => {
			this.loading = v;
		});

	}

}
