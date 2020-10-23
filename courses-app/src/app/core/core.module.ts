import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  	declarations: [HeaderComponent, FooterComponent, BreadcrumbComponent, LogoComponent],
  	exports: [
		HeaderComponent,
		FooterComponent,
		BreadcrumbComponent,
  	],
  	imports: [
		CommonModule,
  	],
})
export class CoreModule { }
