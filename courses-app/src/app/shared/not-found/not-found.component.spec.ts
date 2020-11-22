import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', (): void => {
	let component: NotFoundComponent;
  	let fixture: ComponentFixture<NotFoundComponent>;

  	beforeEach(async (): Promise<void> => {
  		await TestBed.configureTestingModule({
			declarations: [ NotFoundComponent ],
		})
			.compileComponents();
  	});

  	beforeEach((): void => {
  		fixture = TestBed.createComponent(NotFoundComponent);
  		component = fixture.componentInstance;
  		fixture.detectChanges();
  	});

  	it('should create', (): void => {
  		expect(component).toBeTruthy();
  	});
});
