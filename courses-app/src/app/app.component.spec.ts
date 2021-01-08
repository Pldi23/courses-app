import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';
import { AppComponent } from './app.component';

describe('AppComponent', (): void => {
  	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, TranslateModule.forRoot()],
			declarations: [
			AppComponent,
			],
		}).compileComponents();
  	});

  	it('should create the app', (): void => {
		const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
		const app: AppComponent = fixture.componentInstance;
		expect(app).toBeTruthy();
  	});

  	it(`should have as title 'courses-app'`, (): void => {
		const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
		const app: AppComponent = fixture.componentInstance;
		expect(app.title).toEqual('courses-app');
  	});
});
