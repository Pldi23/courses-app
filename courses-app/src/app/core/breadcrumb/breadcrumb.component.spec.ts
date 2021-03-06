import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbComponent } from './breadcrumb.component';

describe('BreadcrumbComponent', (): void => {
  	let component: BreadcrumbComponent;
  	let fixture: ComponentFixture<BreadcrumbComponent>;

  	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			declarations: [ BreadcrumbComponent ],
		})
		.compileComponents();
  	});

  	beforeEach((): void => {
		fixture = TestBed.createComponent(BreadcrumbComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
  	});

  	it('should create', (): void => {
		expect(component).toBeTruthy();
  	});
});
