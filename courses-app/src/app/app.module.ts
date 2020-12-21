import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './course/courses.module';
import { FilterByTitlePipe } from './pipe/filter/filter-by-title.pipe';
import { LoaderInterceptor } from './shared/interceptor/loader-interceptor';
import { TokenInterceptor } from './shared/interceptor/token-interceptor';
import { UrlInterceptor } from './shared/interceptor/url-interceptor';
import { SharedModule } from './shared/shared.module';
import { AuthEffects } from './shared/store/effect/auth.effects';
import { CourseEffects } from './shared/store/effect/course.effects';
import { CourseItemEffects } from './shared/store/effect/courseitem.effects';
import { authReducer } from './shared/store/reduce/auth.reducers';
import { coursesReducer } from './shared/store/reduce/course.reducer';
import { courseItemReducer } from './shared/store/reduce/courseitem.reducer';

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
		StoreModule.forRoot({ auth: authReducer, course: coursesReducer, courseItem: courseItemReducer }),
		EffectsModule.forRoot([AuthEffects, CourseEffects, CourseItemEffects]),
		StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
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
