import { TestBed } from '@angular/core/testing';

import { HeaderBehaviorService } from './header-behavior.service';

describe('HeaderBehaviorService', (): void => {
	let service: HeaderBehaviorService;

  beforeEach((): void => {
  	TestBed.configureTestingModule({});
  	service = TestBed.inject(HeaderBehaviorService);
  });

  it('should be created', (): void => {
  	expect(service).toBeTruthy();
  });
});
