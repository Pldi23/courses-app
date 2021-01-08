import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

import { NameInputComponent } from './name-input.component';

describe('NameInputComponent', (): void => {
  	let component: NameInputComponent;
  	let fixture: ComponentFixture<NameInputComponent>;

  	beforeEach(async (): Promise<void> => {
  		await TestBed.configureTestingModule({
			imports: [ReactiveFormsModule, FormsModule, TranslateModule.forRoot() ],
			declarations: [ NameInputComponent ],
		})
			.compileComponents();
  	});

  	beforeEach((): void => {
  		fixture = TestBed.createComponent(NameInputComponent);
  		component = fixture.componentInstance;
  		fixture.detectChanges();
  	});

  	it('should create', (): void => {
  		expect(component).toBeTruthy();
  	});
});
