import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import '@angular/common/locales/global/ru';
import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './course/courses.module';
import { MissingTranslationService } from './missing-translation-service';
import { FilterByTitlePipe } from './pipe/filter/filter-by-title.pipe';
import { LoaderInterceptor } from './shared/interceptor/loader-interceptor';
import { TokenInterceptor } from './shared/interceptor/token-interceptor';
import { UrlInterceptor } from './shared/interceptor/url-interceptor';
import { SharedModule } from './shared/shared.module';
import { AuthEffects } from './shared/store/effect/auth.effects';
import { AuthorEffects } from './shared/store/effect/author.effects';
import { CourseEffects } from './shared/store/effect/course.effects';
import { CourseItemEffects } from './shared/store/effect/courseitem.effects';
import { authReducer } from './shared/store/reduce/auth.reducers';
import { authorsReducer } from './shared/store/reduce/author.reducer';
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
		StoreModule.forRoot({
			auth: authReducer,
			course: coursesReducer,
			courseItem: courseItemReducer,
			author: authorsReducer,
		}),
		EffectsModule.forRoot([AuthEffects, CourseEffects, CourseItemEffects, AuthorEffects]),
		StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
			missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MissingTranslationService},
			useDefaultLang: false,
		}),
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

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
	return new TranslateHttpLoader(http, './assets/locale/', '.json');
}
