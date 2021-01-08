import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import { FooterComponent } from './footer.component';

describe('FooterComponent', (): void => {
  	let component: FooterComponent;
  	let fixture: ComponentFixture<FooterComponent>;

  	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [TranslateModule.forRoot()],
			declarations: [ FooterComponent ],
		})
		.compileComponents();
  	});

  	beforeEach((): void => {
		fixture = TestBed.createComponent(FooterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
  	});

  	it('should create', (): void => {
		expect(component).toBeTruthy();
  	});
});
