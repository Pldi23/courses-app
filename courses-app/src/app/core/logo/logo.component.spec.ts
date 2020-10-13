import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoComponent } from './logo.component';

describe('LogoComponent', (): void => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async (): Promise<void> => {
	await TestBed.configureTestingModule({
		declarations: [ LogoComponent ],
	})
	.compileComponents();
  });

  beforeEach((): void => {
	fixture = TestBed.createComponent(LogoComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', (): void => {
	expect(component).toBeTruthy();
  });
});
