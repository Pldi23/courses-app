import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  	declarations: [HeaderComponent, FooterComponent, BreadcrumbComponent, LogoComponent, LoginComponent],
  	exports: [
		HeaderComponent,
		FooterComponent,
		BreadcrumbComponent,
  	],
	imports: [
		CommonModule,
		FormsModule,
		AppRoutingModule,
	],
})
export class SharedModule { }
