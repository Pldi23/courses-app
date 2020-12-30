import {HttpClientTestingModule} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthorItemsService } from './author-items.service';

describe('AuthorItemsService', (): void => {
  	let service: AuthorItemsService;

  	beforeEach((): void => {
  		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});
  		service = TestBed.inject(AuthorItemsService);
  	});

  	it('should be created', (): void => {
  		expect(service).toBeTruthy();
  	});
});
