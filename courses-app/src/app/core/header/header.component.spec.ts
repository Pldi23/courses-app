import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', (): void => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async (): Promise<void> => {
	await TestBed.configureTestingModule({
		declarations: [ HeaderComponent ],
	})
	.compileComponents();
  });

  beforeEach((): void => {
	fixture = TestBed.createComponent(HeaderComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', (): void => {
	expect(component).toBeTruthy();
  });
});
