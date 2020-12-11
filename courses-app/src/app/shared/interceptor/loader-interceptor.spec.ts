import {TestBed} from '@angular/core/testing';
import {LoaderService} from '../loader/loader.service';
import { LoaderInterceptor } from './loader-interceptor';

describe('LoaderInterceptor', (): void => {
	let loaderService: LoaderService;
	beforeEach((): void => {
		loaderService = TestBed.inject(LoaderService);
	});
  	it('should create an instance', (): void => {
  		expect(new LoaderInterceptor(loaderService)).toBeTruthy();
  	});
});
