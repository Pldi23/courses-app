import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './course/courses.module';
import { FilterByTitlePipe } from './pipe/filter/filter-by-title.pipe';
import { LoaderInterceptor } from './shared/interceptor/loader-interceptor';
import { TokenInterceptor } from './shared/interceptor/token-interceptor';
import { UrlInterceptor } from './shared/interceptor/url-interceptor';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [
		AppComponent,
		FilterByTitlePipe,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		CoursesModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: UrlInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: LoaderInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
