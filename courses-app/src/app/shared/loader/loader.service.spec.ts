import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', (): void => {
  	let service: LoaderService;

  	beforeEach((): void => {
  		TestBed.configureTestingModule({});
  		service = TestBed.inject(LoaderService);
  	});

  	it('should be created', (): void => {
  		expect(service).toBeTruthy();
  	});
});
