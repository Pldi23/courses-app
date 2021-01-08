import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import { DateInputComponent } from './date-input.component';

describe('DateInputComponent', (): void => {
	let component: DateInputComponent;
	let fixture: ComponentFixture<DateInputComponent>;

  	beforeEach(async (): Promise<void> => {
  		await TestBed.configureTestingModule({
			imports: [ReactiveFormsModule, FormsModule, TranslateModule.forRoot()],
			declarations: [ DateInputComponent ],
  		})
			.compileComponents();
  	});

  	beforeEach((): void => {
  		fixture = TestBed.createComponent(DateInputComponent);
  		component = fixture.componentInstance;
  		fixture.detectChanges();
  	});

  	it('should create', (): void => {
  		expect(component).toBeTruthy();
  	});
});
