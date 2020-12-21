import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionInputComponent } from './description-input.component';

describe('DescriptionInputComponent', (): void => {
  	let component: DescriptionInputComponent;
  	let fixture: ComponentFixture<DescriptionInputComponent>;

  	beforeEach(async (): Promise<void> => {
  		await TestBed.configureTestingModule({
			declarations: [ DescriptionInputComponent ],
		})
			.compileComponents();
  	});

  	beforeEach((): void => {
  		fixture = TestBed.createComponent(DescriptionInputComponent);
  		component = fixture.componentInstance;
  		fixture.detectChanges();
  	});

  	it('should create', (): void => {
  		expect(component).toBeTruthy();
  	});
});
