import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorsInputComponent } from './authors-input.component';

describe('AuthorsInputComponent', (): void => {
  	let component: AuthorsInputComponent;
  	let fixture: ComponentFixture<AuthorsInputComponent>;

  	beforeEach(async (): Promise<void> => {
  		await TestBed.configureTestingModule({
			declarations: [ AuthorsInputComponent ],
		})
			.compileComponents();
  	});

  	beforeEach((): void => {
  		fixture = TestBed.createComponent(AuthorsInputComponent);
  		component = fixture.componentInstance;
  		fixture.detectChanges();
  	});

  	it('should create', (): void => {
  		expect(component).toBeTruthy();
  	});
});
