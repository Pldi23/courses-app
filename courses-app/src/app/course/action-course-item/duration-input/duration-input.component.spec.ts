import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DurationInputComponent } from './duration-input.component';

describe('DurationInputComponent', (): void => {
	let component: DurationInputComponent;
	let fixture: ComponentFixture<DurationInputComponent>;

  	beforeEach(async (): Promise<void> => {
  		await TestBed.configureTestingModule({
			imports: [ReactiveFormsModule, FormsModule ],
			declarations: [ DurationInputComponent ],
  		})
			.compileComponents();
  	});

  	beforeEach((): void => {
  		fixture = TestBed.createComponent(DurationInputComponent);
  		component = fixture.componentInstance;
  		fixture.detectChanges();
  	});

  	it('should create', (): void => {
  		expect(component).toBeTruthy();
  	});
});
