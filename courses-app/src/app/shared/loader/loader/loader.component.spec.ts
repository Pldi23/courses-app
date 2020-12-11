import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';

describe('LoaderComponent', (): void => {
  	let component: LoaderComponent;
  	let fixture: ComponentFixture<LoaderComponent>;

  	beforeEach(async (): Promise<void> => {
  		await TestBed.configureTestingModule({
			declarations: [ LoaderComponent ],
		})
			.compileComponents();
  	});

  	beforeEach((): void => {
  		fixture = TestBed.createComponent(LoaderComponent);
  		component = fixture.componentInstance;
  		fixture.detectChanges();
  	});

  	it('should create', (): void => {
  		expect(component).toBeTruthy();
  	});
});
