import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ModalComponent } from './modal.component';

describe('ModalComponent', (): void => {
	let component: ModalComponent;
	let fixture: ComponentFixture<ModalComponent>;
	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			declarations: [ ModalComponent ],
		})
			.compileComponents();
	});
	beforeEach((): void => {
		fixture = TestBed.createComponent(ModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', (): void => {
		expect(component).toBeTruthy();
	});
	it('should set isShown as false when close', (): void => {
		component.close();
		expect(component.isShown).toEqual(false);
	});
	it('should not render modal when isShown false', (): void => {
		const body: any = fixture.debugElement.query(By.css('.mmodal'));
		const background: any = fixture.debugElement.query(By.css('.mmodal-background'));
		expect(background).toBeFalsy();
		expect(body).toBeFalsy();
	});
	it('should render modal when isShown true', (): void => {
		component.isShown = true;
		fixture.detectChanges();
		const body: any = fixture.debugElement.query(By.css('.mmodal'));
		const background: any = fixture.debugElement.query(By.css('.mmodal-background'));

		expect(body).toBeTruthy();
		expect(background).toBeTruthy();
	});
});
