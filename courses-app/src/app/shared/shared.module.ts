import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  	declarations: [
  		HeaderComponent,
		FooterComponent,
		BreadcrumbComponent,
		LogoComponent,
		LoginComponent,
		NotFoundComponent,
	],
  	exports: [
		HeaderComponent,
		FooterComponent,
		BreadcrumbComponent,
  	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		HttpClientModule,
	],
})
export class SharedModule { }
