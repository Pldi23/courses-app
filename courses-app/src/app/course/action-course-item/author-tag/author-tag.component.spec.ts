import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AuthorTagComponent } from './author-tag.component';

describe('AuthorTagComponent', (): void => {
	let component: AuthorTagComponent;
	let fixture: ComponentFixture<AuthorTagComponent>;

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [ReactiveFormsModule, FormsModule ],
			declarations: [ AuthorTagComponent ],
		})
			.compileComponents();
	});

	beforeEach((): void => {
		fixture = TestBed.createComponent(AuthorTagComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', (): void => {
		expect(component).toBeTruthy();
	});
});
